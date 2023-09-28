import { PrismaClient } from "@prisma/client";

//Implements the Prisma client as a singleton, so that when the project hot reloads it doesn't create multiple instances of the server

const globalForPrisma = {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPrisma ??
    new PrismaClient({
        log:['query']
    })


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma;