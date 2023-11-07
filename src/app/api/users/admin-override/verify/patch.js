import { NextResponse } from 'next/server';
import {prisma} from '@/database';
import { updateUserVerifStatus } from '@/database/users/updateUser';
import { createUserErrors } from '@/lib/sharedErrors';

const PATCH = async (req) => {
    
    try{
        const data =  await req.json();
        const {userId,  emailVerified} = data;
        
        const updatedUser = updateUserVerifStatus(userId, emailVerified)
        
            
        return NextResponse.json({msg: updatedUser}, {status: 200})
    }catch(error){

        let err = createUserErrors(error), status = 500

        return NextResponse.json({errors: [err]}, {status})

    }

}

export default PATCH;
