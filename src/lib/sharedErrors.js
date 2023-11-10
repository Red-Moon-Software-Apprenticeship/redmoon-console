import {
    PrismaClientInitializationError,
    PrismaClientRustPanicError,
    PrismaClientKnownRequestError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    PrismaClientConcurrencyError,
} from "@prisma/client/runtime/library";

import { NON_EXISTANCE_CODE, UNIQUE_CONSTRAINT_FAILED_CODE, VALIDATION_FAILED_CODE } from "./errorCodes";

export const createUserErrors = (error) => {

    let errors = [], status = 500;

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

    return ({ errors, status });
}

export const generatePatchErrors = (error) => {

    let errors = [], status = 500;

    if (error.code === NON_EXISTANCE_CODE) {
        errors.push("User not found");
        status = 404;
    }

    if (error instanceof PrismaClientInitializationError) {
        errors.push('Failed to initialize database connection.');
        status = 500;
    }

    if (error instanceof PrismaClientRustPanicError) {
        errors.push('Internal server error. Please try again later.');
        status = 500;
    }
    if (error instanceof PrismaClientRustPanicError) {
        errors.push('Internal server error. Please try again later.');
    }

    if (error instanceof PrismaClientKnownRequestError) {
        errors.push(error.message);
        status = 400;
    }
    if (error instanceof PrismaClientUnknownRequestError) {
        errors.push('An unknown error occurred.');
    }
    if (error instanceof PrismaClientValidationError) {
        errors.push('Query validation failed.');
        status = 400;
    }
    if (error instanceof PrismaClientConcurrencyError) {
        errors.push('A concurrency conflict occurred.');
        status = 409;
    }

    return ({ errors, status });
}

export const generateDeleteErrors = (error) => {


    let errors = [], status = 500;

    if (error.code === NON_EXISTANCE_CODE) {
        errors.push("Issue not found");
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

    return ({ errors, status });
}

export const generatePostErrors = (error) => {
    let errors = [], status = 500;

   
    if (error instanceof PrismaClientKnownRequestError && error.code === UNIQUE_CONSTRAINT_FAILED_CODE) {
        errors.push("A record with the provided unique identifier already exists.");
        status = 400;
        }

    // Handle validation error (like when the provided data does not meet schema requirements)
    if (error instanceof PrismaClientValidationError) {
        errors.push('The provided data is invalid.');
        status = 400;
    }
   
     if (error instanceof PrismaClientUnknownRequestError) {
        errors.push('An unknown error occurred while processing your request.');
        status = 500;
    }

   
    if (!errors.length) {
        errors.push('An error occurred while processing your request.');
        status = 500;
    }

    return { errors, status };
}
