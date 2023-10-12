
export const findUsersVerifToken = async (userId) => (
    await prisma.user.findUnique({
        select:{
            verifToken: {
                select: {
                    token: true
                }
            }
        },
        where: {
            id: userId
        },
        
    })
)