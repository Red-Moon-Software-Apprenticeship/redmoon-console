import { prisma } from '@/database/db';

//The goal here was to modularize the prisma methods into pieces to use together/alterative based on the user
export const createUser = (userData) => (
    prisma.user.create({
        data: userData
    })
)

//Abstraction of user and role creation

export const createUserRoleToken = (userData, roleData, verifToken, relation) => {
    //Nope, no spoofing allowed
    if (!relation || (relation !== 'apprentice' && relation !== 'company')){
        return null
    }

    userData[relation] = {create: roleData};
    userData['verifToken'] = verifToken;
    return prisma.user.create({
        data: userData
    })
}

export const createAdmin = (userData, roleData) => {

    return prisma.user.create({
        data: userData,
        admin: {
            create: roleData
        }
    })
}