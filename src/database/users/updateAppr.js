export const updateAppr = async (updatedFields, userId ) =>(
    await prisma.apprentice.update({
        where:{
            userId
        },
        data: updatedFields
    })
)