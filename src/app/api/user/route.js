import { createUser } from "@/database/users/createUser";
import { hash } from "bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

//Handles user signup, uses bcrypt to hash the pw before entry
const handler = async(req) =>{

     const data = await req.json()
     const {name, email, password, role, state, city, techStack, bio} = data;
     try {
        const hashedPassword = await hash(password, 11)
        const newUser = await createUser(name, email, hashedPassword, role, state, city, techStack, bio)
        return NextResponse.json({msg: newUser}, {status: 201})

     } catch (error) {

         let errorMsg = "An unexpected error occured. Please try again.";
         let statusCode = 500;

         if (error instanceof PrismaClientKnownRequestError){

            errorMsg = 'A user already exists with that email';
            statusCode = 409;
          
         }


         return NextResponse.json(
            {error: errorMsg},
            {status: statusCode}
         )
     }

}

export {handler as POST}