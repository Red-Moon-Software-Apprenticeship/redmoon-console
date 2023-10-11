"use server"
import { hash } from "bcrypt"
import { createUserAndRole } from "@/database/users/createUser"
import { PrismaClientInitializationError, PrismaClientRustPanicError } from "@prisma/client/runtime/library"

export const createCompany = async (formData) => {
  

} 