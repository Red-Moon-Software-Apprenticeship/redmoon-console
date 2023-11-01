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
