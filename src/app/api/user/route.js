import { createUser } from "@/database/users/createUser";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

//Handles user signup
const handler = async(req) =>{

     const data = await req.json()
     const {name, email, password, role, state, city, techStack, bio} = data;
     try {
        const hashedPassword = await hash(password, 11)
        const newUser = await createUser(name, email, hashedPassword, role, state, city, techStack, bio)
        return NextResponse.json({msg: newUser}, {status: 201})

     } catch (error) {
        return NextResponse.json(
            {error: "This is a boilerplate error that can be improved on, point is somethings wrong here lol."},
            {status: 500}
        )
     }

}

export {handler as POST}