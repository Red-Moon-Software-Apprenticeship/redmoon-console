import { createInvite } from '@/database/invites/createInvite';
import { secureUserRoute } from '@/lib/secureUserRoute';
import { NextResponse } from 'next/server';
import { generatePostErrors } from '@/lib/sharedErrors';

const POST = async (req) => {

    try{
        const data = await req.json()
        const inviteeId = data?.inviteeId;
        await secureUserRoute(inviteeId)
        const newInvite = await createInvite(data);
        
        return NextResponse.json({ newInvite }, {status: 200})

    }catch(error){

        let {errors, status} = generatePostErrors(error)
        return NextResponse.json({errors}, {status})

    }

}

export default POST;