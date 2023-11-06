import {prisma} from '@/database/db'

export const findIssueBySlug = (urlSlug) => prisma.issue.findUnique({
    where: { urlSlug }, 
    select: {
        id: true,
        title: true,
        description: true,
        techStack: true,
        company: {
            select: {
                user:{
                    select: {
                        name: true,
                        image: true,
                    }
                }
            }
        }
    }
});

export const findIssueForEdit = async (urlSlug) => 
  await prisma.$queryRaw`
  SELECT "Company"."id" AS "companyId", "Issue"."id", 
  "Issue"."title", "Issue"."description", "Issue"."techStack"
  FROM "Issue"
  JOIN "Company" ON "Issue"."companyId" = "Company"."id"
  WHERE "Issue"."urlSlug" = ${urlSlug};`
