import {prisma} from '@/database/db'

export const findIssuesByCompanyId = (companyId) => prisma.issue.findMany({
    where: { companyId: companyId }
});

export const findIssuesByUserId = async (userId) => 
 await prisma.user.findUnique({ 
    where: { id: userId },
    select: {
         company:
            {
                select:{

                issue: true
            }
        }

} })
