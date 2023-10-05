import { prisma } from "@/database/db";

//Abstracted away the main query, leaving only the select field to be filled out
const getUsersLeftJoin = async (model, selectOptions) => (
    await model.findMany({
        include: {
            user:{
                select: selectOptions
            }
        }
    })
)

export const getApprentices = async (selectOptions) => (
    await getUsersLeftJoin(prisma.apprentice, selectOptions)
)

export const getAdmins = async (selectOptions) => (
    await getUsersLeftJoin(prisma.admin, selectOptions)
)
export const getCompanies = async (selectOptions) => (
    await getUsersLeftJoin(prisma.company, selectOptions)
)