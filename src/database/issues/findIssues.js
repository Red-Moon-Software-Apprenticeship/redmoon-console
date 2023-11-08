import { prisma } from '@/database/db'

export const findIssuesByCompanyId = (companyId) => prisma.issue.findMany({
    where: { companyId: companyId }
});

export const findIssuesByUserId = async (userId) => (
    await prisma.$queryRaw`
    SELECT "Issue".*, COUNT("Invite"."id") AS "numInvites" FROM "Issue"
    JOIN "Company" ON "Issue"."companyId" = "Company"."id"
    JOIN "Invite" ON "Issue"."id" = "Invite"."issueId"
    WHERE "Company"."userId" = ${userId}
    GROUP BY "Issue"."id"
    ;`
)

