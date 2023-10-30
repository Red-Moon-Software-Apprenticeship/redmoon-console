"use server"
import { hash } from "bcrypt"
import { validateNewAppr } from "../validations/validateNewAppr"
import { createUserRoleToken } from "@/database/users/createUser"
import { createUserErrors } from "../sharedErrors"
import { createVerifToken } from "./_createVerifReq"
import { generateUrlSlug } from "../generateUrlSlug"

export const createAppr = async (formData) => {
    const data = Object.fromEntries(formData);
    const errors = await validateNewAppr(data)
    if (errors.length) {
        return { errors }
    }

    const { firstName, lastName, email, password, state, city } = data;

    try {
        const hashedPassword = await hash(password, 11)
        const name = `${firstName} ${lastName}`
        const urlSlug = await generateUrlSlug(name)
        const role = 'apprentice'

        const userData = {
            name,
            email,
            hashedPassword,
            role,
            state,
            city,
            urlSlug,
        }

        const roleData = {
            firstName,
            lastName,
            level: 1
        }

        const verifToken = createVerifToken()

        const newAppr = await createUserRoleToken(userData, roleData, verifToken, role)
        return newAppr;

    } catch (error) {
        const { errors } = createUserErrors(error)
        return { errors }

    }

} 