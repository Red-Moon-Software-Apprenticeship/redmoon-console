import { prisma } from '@/database/db'

export const findIssuesByCompanyId = (companyId) => prisma.issue.findMany({
    where: { companyId: companyId }
});

export const findIssuesByUserId = async (userId) => (
    await prisma.$queryRaw`
    SELECT "Issue".* FROM "Issue"
    JOIN "Company" ON "Issue"."companyId" = "Company"."id"
    WHERE "Company"."userId" = ${userId};`
)
