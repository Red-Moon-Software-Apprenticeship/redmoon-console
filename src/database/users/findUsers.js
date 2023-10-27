import { prisma } from "@/database/db";

//Abstracted away the main query, leaving only the select field to be filled ou


export const getApprsProfile  = async() => (
   await prisma.apprentice.findMany(
        {select: {
            userId: true,
            firstName: true,
            lastName: true,
            level: true,
            user:{
              select:{
                email: true,
                image: true,
              }
            }
        }}
      )
)


export const getApplicantApprs = async() => (
await prisma.user.findMany({
        where: {
            role: 'apprentice',
            subRole: 'unmerged issue'
        },
        select: {
            id: true,
            name: true,
            email: true,
            emailVerified: true,
            apprentice: {
                select: {
                    githubIssue: {
                        select: {
                            url: true
                        }
                    }
                }
            }
        }
    })

)

export const getAdmins = async (userQuery) => (
    await getUsersLeftJoin(prisma.admin, userQuery)
)
export const getCompanies = async (userQuery) => (
    await getUsersLeftJoin(prisma.company, userQuery)
)

