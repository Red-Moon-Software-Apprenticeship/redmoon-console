import {prisma} from '@/database/db'

export const getIssuesByCompanyId = (companyId) => prisma.issue.findMany({
    where: { companyId: companyId }
});
