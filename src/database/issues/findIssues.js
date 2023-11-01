import {prisma} from '@/database/db'

export const findIssuesByCompanyId = (companyId) => prisma.issue.findMany({
    where: { companyId: companyId }
});
