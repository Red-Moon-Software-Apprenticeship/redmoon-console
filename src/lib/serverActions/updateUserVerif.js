"use server"
import { prisma } from "@/database";
import { findUsersVerifAttrs } from "@/database/users/findUserToken";
import { updateSelfVerifStatus } from "@/database/users/updateUser";

export const updateUserVerif = async (data, userId) => {
    const {token} = Object.fromEntries(data);    
    try {
        const {role, subRole, verifToken} = await findUsersVerifAttrs(userId); 
        
        if (token !== verifToken?.token){
            throw new Error('invalid token')    

        } else if (subRole !== 'unverified'){
            throw new Error('You are already verified!')

        } else{
            
            await updateSelfVerifStatus(userId, role)
            return ({msg: 'Successful Verification!'})
        }
    
    } catch (error) {
 
        return {errors: ['Unsuccesful Verification']}
    }
}