"use server"
import { hash } from "bcrypt"
import { validateNewAppr } from "../validations/validateNewAppr"
import { createUserRoleToken } from "@/database/users/createUser"
import { createUserErrors } from "../sharedErrors"
import { createVerifToken } from "./_createVerifReq"

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
    
    const verifToken = createVerifToken()

    try {
        const newAppr = await createUserRoleToken(userData, roleData, verifToken, role)
        return newAppr;
        
    } catch (error) {
        return createUserErrors(error)

    }

} 