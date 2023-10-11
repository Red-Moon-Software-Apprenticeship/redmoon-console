"use server"
import { hash } from "bcrypt"
import { createUserAndRole } from "@/database/users/createUser"
import { PrismaClientInitializationError, PrismaClientRustPanicError } from "@prisma/client/runtime/library"
import { validateNewCompany } from "../validations"

export const createCompany = async (formData) => {
    const data =  Object.fromEntries(formData)
    const errors = await validateNewCompany(data);
    
    if (errors.length){
        return {errors}
    }
    
    const {name, email, password, state, city, address} = data;
    const role = 'company';
    const hashedPassword = await hash(password, 11)
    const userData = {
        name,
        email,
        hashedPassword,
        role,
        state,
        city
    }

    const roleData = {
        address
    }

    try {
        const newCompany = createUserAndRole(userData, roleData, role)
        return newCompany
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