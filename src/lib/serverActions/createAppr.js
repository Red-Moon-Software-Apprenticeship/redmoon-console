"use server"
import { hash } from "bcrypt"
import { validateNewAppr } from "../validations/validateNewAppr"
import { createUserAndRole } from "@/database/users/createUser"
import { PrismaClientInitializationError, PrismaClientRustPanicError } from "@prisma/client/runtime/library"

export const createAppr = async (formData) => {
    const data = Object.fromEntries(formData);
    const errors = await validateNewAppr(data)
    if (errors.length) {
        return { errors }
    }

    const { firstName, lastName, email, password, state, city } = data;

    const hashedPassword = await hash(password, 11)
    const role = 'apprentice'
    const userData = {
        name: `${firstName} ${lastName}`,
        email,
        hashedPassword,
        role,
        state,
        city,

    }

    const roleData = {
            firstName,
            lastName,
            level: 1
        }
    try {
        const newAppr = await createUserAndRole(userData, roleData, role)
        return newAppr;
    } catch (error) {
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

} 