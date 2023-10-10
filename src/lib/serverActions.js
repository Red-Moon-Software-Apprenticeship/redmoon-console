"use server"
import { hash } from "bcrypt"
import { validateNewAppr } from "./handleSignUpErrors"
import { createUserAndRole } from "@/database/users/createUser"


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
        return {errors: [error.message]}
    }

} 