import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import {createUserErrors} from '@/lib/sharedErrors'
import { updatePassword } from '@/database/users/updatePassword';
import { findUsersPassword } from '@/database/users/findUser';

const handler = async (req) => {
    
    try{
        const {userId, currentPassword, newPassword} = await req.json();
        const session = await getServerSession(authOptions);

        if (session?.user?.id !== userId){
            throw new Error('You are not authorized to make this request!')
        }

        const {hashedPassword} = await findUsersPassword(userId)
           
        if (!await compare(currentPassword, hashedPassword)){
            throw new Error('Passwords do not match!')
        }

        const passwordUpdated = await updatePassword(userId, newPassword)
   
        return NextResponse.json({passwordUpdated}, {status: 200})

    }catch(error){
        let err, status = 500
        err = createUserErrors(error)


        return NextResponse.json({err}, {status})

    }

}

export default handler;
