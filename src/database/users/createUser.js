import { prisma } from '@/database/db';

//The goal here was to modularize the prisma methods into pieces to use together/alterative based on the user
export const createUser = (userData) => (
    prisma.user.create({
        data: userData
    })
)

//Abstraction of user and role creation

export const createUserAndRole = (userData, roleData, relation) => {
    //Nope, no spoofing allowed
    if (!relation || (relation !== 'apprentice' && relation !== 'company')){
        return null
    }

    const newData = {...userData};
    newData[relation] = {create: roleData};
    return prisma.user.create({
        data: newData
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