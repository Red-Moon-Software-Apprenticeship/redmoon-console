import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { deleteIssue } from '@/database/issues';
import { generateDeleteErrors } from '@/lib/sharedErrors';

const DELETE = async (req) => {
    
    
    try{
        const {userId, issueId} = await req.json()
        const session = await getServerSession(authOptions);

        if (session?.user?.id !== userId){
            
            return NextResponse.json({errors:['You are not permitted to post this!']}, {status: 403})
        }
        
        const deletedIssue = await deleteIssue(issueId);

        return NextResponse.json({ deletedIssue: deletedIssue }, {status: 200})

    }catch(error){

        let [errors, status] = generateDeleteErrors(error)

        return NextResponse.json({errors}, {status})
    }

}

export default DELETE;
