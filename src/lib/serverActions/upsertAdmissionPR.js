"use server"
import { prisma } from '@/database'

export const upsertAdmissionPR = async (data, userId) => {
    const { pullRequestURL: url } = Object.fromEntries(data);
    try {
        const { id: apprId } = await prisma.apprentice.findUnique({
            where: {
                userId
            },
            select: {
                id: true,
            }
        })
        const newPR = await prisma.apprFirstPR.upsert({
            where: {
                apprId

            },
            update: {
                url
            },
            create: {
                apprId,
                url
            }
        })
        return { message: "success", data: newPR }

    } catch (error) {
         return { errors: ['Unsucessful submission'] }
    }

}