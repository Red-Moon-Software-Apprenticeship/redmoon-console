import {prisma} from '@/database/db'

export const deleteIssue = async (issueId) => 
    await prisma.issue.delete({
        where: { id: issueId }
    });
