"use server"
import { hash } from "bcrypt"
import { createUserRoleToken } from "@/database/users/createUser"
import { validateNewCompany } from "../validations"
import { createUserErrors } from "../sharedErrors"
import { createVerifToken } from "./_createVerifReq"

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
    const verifToken = createVerifToken()
    try {
        const newCompany = createUserRoleToken(userData, roleData, verifToken, role)
        return newCompany
    } catch (error) {
        
        return createUserErrors(error)


    }

} 