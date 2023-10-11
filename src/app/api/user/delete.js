import { deleteUser } from "@/database/users/deleteUser"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { NON_EXISTANCE_CODE } from "@/lib/errorCodes";


const DELETE = async(req) => {

    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || session.user.role !== 'admin'){
        return NextResponse.json({msg: "Unauthorized access."}, {status: 401})
    }

    try{
        const {userId} = await req.json();
        const deletedUser = await deleteUser(userId);
        return NextResponse.json({userId: deletedUser}, {status: 200})

    } catch(error){

        if(error.code === NON_EXISTANCE_CODE){
            return NextResponse.json({msg: 'That user does not exist in the database'}, {status: 404})
        }else{    
            return NextResponse.json({msg: 'There seems to be a server side error'}, {status: 500})
        } 
    }


}


export default DELETE