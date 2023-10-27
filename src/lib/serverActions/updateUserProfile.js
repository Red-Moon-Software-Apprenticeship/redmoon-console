"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { createUserErrors } from "../sharedErrors"

export const updateUserProfile = async(data, userId) => {

    const session = await getServerSession(authOptions)
    if (userId !== session?.user?.id){
        return {errors: ['You are not authroized to access this route']}
    }

    try { 
        const userProfile = await updateUserPublicProfile(data, userId)
        return ({msg: userProfile})


    } catch (error) {
 
        let errors = createUserErrors(error)

        return {errors: errors.errors}
    }
}