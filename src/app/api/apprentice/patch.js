import { updateAppr } from "@/database/users/updateAppr";
import { NextResponse } from "next/server";

const handler = async(req) => {

    try{
        const data = await req.json()
        const {userId} = data;
        delete data.userId;
        const updatedAppr = await updateAppr(data, userId)
        return NextResponse.json({updatedAppr}, {status: 200})

    }catch(error){
        let err, status = 500 
        return NextResponse.json({err}, {status})

    }

}

export default handler;
