import {prisma} from '@/database/db'



export const createIssue= async (issueData) => (
    await prisma.issue.create({
            data: issueData

    })

 
)
