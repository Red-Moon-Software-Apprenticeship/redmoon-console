import { createInvite } from '@/database/invites/createInvite';
import { secureUserApiRoute, secureUserRoute } from '@/lib/secureUserRoute';
import { NextResponse } from 'next/server';
import { generatePostErrors } from '@/lib/sharedErrors';

const POST = async (req) => {
     
    try{
        const {userId, inviterId, inviteeId, issueId} = await req.json()
        
        if (!await secureUserApiRoute(userId)){
            return NextResponse.json({errors: "Unauthorized"}, {status: 401})
        }

        const newInvite = await createInvite({
            inviteeId,
            inviterId,
            issueId
        });
        
        return NextResponse.json({ newInvite }, {status: 200})

    }catch(error){

        const {errors, status} = generatePostErrors(error)
        return NextResponse.json({errors}, {status})

    }

}

export default POST;