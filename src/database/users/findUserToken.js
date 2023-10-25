
export const findUsersVerifAttrs = async (userId) => (
    await prisma.user.findUnique({
        select:{
            role: true,
            subRole: true,
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