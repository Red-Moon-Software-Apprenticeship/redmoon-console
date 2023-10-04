import { prisma } from '@/database/db';

//The goal here was to modularize the prisma methods into pieces to use together/alterative based on the user
export const createUser = (userData) => (
    prisma.user.create({
        data: userData
    })
)

//Abstraction of user and role creation

export const createUserAndRole = (userData, roleData, role) => {
    
    const newData = {...userData};
    newData[role] = {create: roleData};

    return prisma.user.create({
        data: newData
    })
}