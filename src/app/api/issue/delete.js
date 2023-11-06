import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

const DELETE = async (req) => {
    
    
    try{
        const {userId, issueId} = await req.json()
        const session = await getServerSession(authOptions);

        if (!session?.user?.id !== userId){
            return NextResponse.json({errors:['You are not permitted to post this!']}, {status: 403})
        }



        return NextResponse.json({ }, {status: 200})
    }catch(error){
        let err, status = 500


        return NextResponse.json({err}, {status})

    }

}

export default DELETE;
