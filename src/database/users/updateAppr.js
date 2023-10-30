import { prisma } from "../db"

export const updateAppr = async (updatedFields, userId ) =>(
    await prisma.apprentice.update({
        where:{
            userId
        },
        data: updatedFields
    })
)

export const updateUserRole =  async(userId, role) => (
    await prisma.user.update({
        where: {
            id: userId
        },
        data:{
            role
        }
    })

)