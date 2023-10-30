import { prisma } from "../db"

export const updateAppr = async (updatedFields, userId ) =>(
    await prisma.apprentice.update({
        where:{
            userId
        },
        data: updatedFields
    })
)

export const updateApprToAdmin = async(userId) => (
    await prisma.user.update({
        where: {
            id: userId
        },
        data:{
            role: 'admin'
        }
    })

)