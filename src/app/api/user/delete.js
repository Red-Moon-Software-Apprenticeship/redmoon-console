import { deleteUser } from "@/database/users/deleteUser"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


const DELETE = async(req) => {

    const session = await getServerSession(authOptions);
    if (!session || !session.user || session.user.role !== 'admin'){
        return NextResponse.json({msg: "Unauthorized access."}, {status: 401})
    }

    try{
        
        const data = await req.json()
        const {userId} = data;
        const deletedUser = await deleteUser(userId);
        return NextResponse.json({userId: deletedUser}, {status: 200})

    } catch(error){

        if(!deletedUser){
            return NextResponse.json({msg: 'That user does not exist in the database'}, {status: 404})
        }else{
            return NextResponse.json({msg: 'There seems to be a server side error'}, {status: 500})
        } 
    }


}


export default DELETE