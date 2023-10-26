import { NextResponse } from 'next/server';
import { compare, hash } from 'bcrypt';
import {prisma} from '@/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import {createUserErrors} from '@/lib/sharedErrors'
const handler = async (req) => {
    
    try{
        const {userId, currentPassword, newPassword} = await req.json();
        const session = await getServerSession(authOptions);
        if (session?.user?.id !== userId){
            throw new Error('You are not authorized to make this request!')
        }

        const {hashedPassword} = await prisma.user.findUnique({
            select:{
                hashedPassword: true,
            },
            where: {
                id: userId
            } 

        })     
        
        if (!await compare(currentPassword, hashedPassword)){
            throw new Error('Passwords do not match!')
        }

        const passwordUpdated = await prisma.user.update({ 
            where: {
                id: userId
            },
            data: {
                hashedPassword: await hash(newPassword, 11)
            }, 
            select:{
                id: true
            }
        })
        
    
        return NextResponse.json({passwordUpdated}, {status: 200})
    }catch(error){
        let err, status = 500
        err = createUserErrors(error)


        return NextResponse.json({err}, {status})

    }

}

export default handler;
