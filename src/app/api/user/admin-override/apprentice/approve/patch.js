import { NextResponse } from 'next/server';
import { updateApprAdmission } from '@/database/users/updateUser';

const PATCH = async (req) => {

    try{
        const data = await req.json()
        const {userId, subRole } = data;

        

        const admittedAppr = await updateApprAdmission(userId, subRole)
        
        return NextResponse.json({msg:`Succesfully verified ${admittedAppr.name}` }, {status: 200})

        }catch(error){
            let err, status = 500
        err = ['Unsuccesful user admission']

        return NextResponse.json({errors: err}, {status})

    }

}

export default PATCH;
