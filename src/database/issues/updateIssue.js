import { prisma} from '@/database/db'

export const updateIssue = async (issueId, updateData) => await prisma.issue.update({
    where: { id: issueId },
    data: updateData
});
