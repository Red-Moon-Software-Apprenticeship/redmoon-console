import { PrismaClientInitializationError, PrismaClientRustPanicError } from "@prisma/client/runtime/library";
import { NON_EXISTANCE_CODE } from "./errorCodes";

export const createUserErrors = (error) => {

    let errors =  [], status = 500 ;

    if (error.code === 'P2002') {
        errors.push(`The ${error.meta.target} is already in use.`);
        status = 409; // Conflict
    } 
    
    if (error instanceof PrismaClientInitializationError) {
        errors.push('Failed to initialize database connection.');
        status = 500; // Internal Server Error
    }
    
    if (error instanceof PrismaClientRustPanicError) {
        errors.push('Internal server error. Please try again later.');
        status = 500; // Internal Server Error
    }

    return ({errors, status});
}


export const generatePatchErrors = (error) => {


    let errors =  [], status = 500 ;

    if (error.code === NON_EXISTANCE_CODE) {
        errors.push("User not found");
        status = 404;
    } 
    
    if (error instanceof PrismaClientInitializationError) {
        errors.push('Failed to initialize database connection.');
        status = 500; // Internal Server Error
    }
    
    if (error instanceof PrismaClientRustPanicError) {
        errors.push('Internal server error. Please try again later.');
        status = 500; // Internal Server Error
    }

    return ({errors, status});
}
