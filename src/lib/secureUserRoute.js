"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export const secureUserRoute = async(userId, session=null) =>{
   

    if (!session){
         session= await getServerSession(authOptions)
    }

    if (userId !== session?.user?.id){
        redirect('/')     
    }
    
}

export const secureUserApiRoute = async(userId, session=null) =>{
   

    if (!session){
         session= await getServerSession(authOptions)
    }

    if (userId !== session?.user?.id){
        return false;     
    }
    
    return true;
}

