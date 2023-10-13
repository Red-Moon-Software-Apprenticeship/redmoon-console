"use server"
import { prisma } from "@/database";
import { findUsersVerifAttrs } from "@/database/users/findUserToken";

export const updateUserVerif = async (data, userId) => {
    const {token} = Object.fromEntries(data);    
    try {
        const {role, subRole, verifToken} = await findUsersVerifAttrs(userId); 
        
        if (token !== verifToken[0].token){
            throw new Error('invalid token')    

        } else if (subRole !== 'unverified'){
            throw new Error('You are already verified!')

        } else{
           await prisma.user.update({
                where: {
                    id: userId
                },
               
                data:{ 
                    emailVerified: new Date(Date.now()),
                    subRole: role === 'apprentice' ? 'unmerged issue' : ''
                }
            })
            return ({msg: 'Successful Verification!'})
        }
    
    } catch (error) {
 
        return {errors: ['Unsuccesful Verification']}
    }
}