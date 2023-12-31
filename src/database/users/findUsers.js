import { prisma } from "@/database/db";

//Abstracted away the main query, leaving only the select field to be filled ou

export const getApprsProfile  = async() => (
   await prisma.user.findMany(
        {  
            where:{
                role: 'apprentice',
            },
            
            select: {
              name: true,
              email: true,
              apprentice: {
                select: {
                    level: true,

                }
              },
              verifToken:{ 
                select: {
                    token: true
                }

              }
            },
        
        }
      )
)

export const getApprsForIndex = async () => (
    await prisma.apprentice.findMany(
        {
          select:{
            id: true,
            firstName: true,
            lastName: true,
            level: true,
            user:{
                select:{
                    image: true,
                    techStack: true,
                    city: true,
                    state: true,
                    email: true,
                    urlSlug: true
                }
            }
          } 

        }

    )


)


export const getApplicantApprs = async() => (
await prisma.user.findMany({
        where: {
            role: 'apprentice',
            subRole: {
                in: ['unmerged issue', 'unverified']
        }
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


export const findApprsNamesEmails = async () => (
            await prisma.user.findMany({

                where: { 
                    role: 'apprentice',
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                }

                
            })

        )

