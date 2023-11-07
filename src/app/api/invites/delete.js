import { secureUserRoute } from '@/lib/secureUserRoute';
import { NextResponse } from 'next/server';
import { deleteInvite } from '@/database/invites/deleteInvite';
import { generateDeleteErrors } from '@/lib/sharedErrors';


const DELETE = async (req) => {
    try{
        const { inviteId, inviterId} = await req.json()        
        await secureUserRoute(inviterId) 
        const deletedInvite = await deleteInvite(inviteId)
        
        return NextResponse.json({ deletedInvite }, {status: 200})

    }catch(error){
        let {errors, status} = generateDeleteErrors(error)
        
        return NextResponse.json({errors}, {status})
    }

}

export default DELETE;