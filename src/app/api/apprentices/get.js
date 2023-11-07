import { getApprsProfile } from "@/database/users/findUsers";
import { NextResponse } from "next/server";

const GET = async() => {
    try{
        const apprs = await getApprsProfile();
        return NextResponse.json(apprs, {status: 200})
    }

    catch(error){
        return NextResponse.json({error: "Could not succesfully retrieve the apprentices"}, {status:500})

    }

}


export default GET;