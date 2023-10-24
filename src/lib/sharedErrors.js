import { PrismaClientInitializationError, PrismaClientRustPanicError } from "@prisma/client/runtime/library"

export const createUserErrors = (error) => {
    if (error.code === 'P2002') {
        return { errors: [`The ${error.meta.target} is already in use.`] };
    }


    if (error instanceof PrismaClientInitializationError) {
        return { errors: ['Failed to initialize database connection.'] };
    }

    if (error instanceof PrismaClientRustPanicError) {
        return { errors: ['Internal server error. Please try again later.'] };
    }


    return { errors: [error.message] };
}