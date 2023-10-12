"use server"
import { prisma } from "@/database";
import { findUsersVerifToken } from "@/database/users/findUserToken";

export const updateUserVerif = async (data, userId) => {
    const {token} = Object.fromEntries(data);    
    try {
        const {verifToken} = await findUsersVerifToken(userId); 

        if (token !== verifToken[0].token){
            throw new Error('invalid token')    
        }
        
        else{
           await prisma.user.update({
                where: {
                    id: userId
                },
                data:{ 
                    emailVerified: new Date(Date.now()),
                    subRole: ''
                }
            })
            return ({msg: 'Successful Verification!'})
        }
    
    } catch (error) {

        return {errors: ['Unsuccesful Verification']}
    }
}