import { prisma } from '../db'

export const deleteUser = async (userId) => (
    await prisma.user.delete({
        where: {
            id: userId
        },
    })

)
