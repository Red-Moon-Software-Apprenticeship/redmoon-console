import {prisma} from '@/database/db'

export const deleteIssue = (issueId) => prisma.issue.delete({
    where: { id: issueId }
});
