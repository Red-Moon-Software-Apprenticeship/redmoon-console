import { prisma } from "@/database"

export const updateUserPublicProfile = async (data, userId) => (
    await prisma.user.update({
        where: {
            id: userId
        },
        data,
        select: {
            id: true,
        }

    })

)