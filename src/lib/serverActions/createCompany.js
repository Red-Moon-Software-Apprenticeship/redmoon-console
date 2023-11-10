"use server"
import { hash } from "bcrypt"
import { createUserRoleToken } from "@/database/users/createUser"
import { validateNewCompany } from "../validations"
import { createUserErrors } from "../sharedErrors"
import { createVerifToken } from "./_createVerifReq"
import { generateUrlSlug } from "../generateUrlSlug"

export const createCompany = async (formData) => {
    const data =  Object.fromEntries(formData)
    const errors = await validateNewCompany(data);
    
    if (errors.length){
        return {errors}
    }
    
    const {name, email, password, state, city, address} = data;
    const role = 'company';

    try {
        const urlSlug = await generateUrlSlug(name, findUserBySlugCheck)
        const hashedPassword = await hash(password, 11)
        const userData = {
            name,
            email,
            hashedPassword,
            role,
            state,
            city,
            urlSlug
        }

        const roleData = {
            address
        }
        const verifToken = createVerifToken()

        const newCompany = await createUserRoleToken(userData, roleData, verifToken, role)
        return newCompany
    } catch (error) {

        const {errors} = createUserErrors(error)
        return {errors}


    }

} 