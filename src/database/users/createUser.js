import { prisma } from '@/database/db';

export const createUser = (name, email, hashedPassword, role, state, city, techStack, bio) => (
    prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            role,
            state,
            city,
            techStack,
            bio
        }
    })
)    