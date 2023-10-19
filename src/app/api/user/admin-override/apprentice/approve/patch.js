import { NextResponse } from 'next/server';
import {prisma} from '@/database'
const PATCH = async (req) => {

    try{
        const data = await req.json()
        const {userId, subRole } = data;
        const admittedAppr = await prisma.user.update({
            where: {
                id: userId
            },
            data:{
                subRole
            },
            select:{
                name: true,
            }
        })   
        
        return NextResponse.json({msg:`Succesfully verified ${admittedAppr.name}` }, {status: 200})
    }catch(error){
        let err, status = 500
        err = ['Unsuccesful user admission']

        return NextResponse.json({errors: err}, {status})

    }

}

export default PATCH;
