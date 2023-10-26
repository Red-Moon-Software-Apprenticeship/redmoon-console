import { hash } from "bcrypt"

export const updatePassword = async (userId, newPassword) => (

    await prisma.user.update({
        where: {
            id: userId
        },
        data: {
            hashedPassword: await hash(newPassword, 11)
        },
        select: {
            id: true
        }
    })
)

