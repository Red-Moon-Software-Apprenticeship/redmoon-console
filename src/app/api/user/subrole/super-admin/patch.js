import { updateUserSubrole } from "@/database/users/updateUser";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { generatePatchErrors } from "@/lib/sharedErrors";

const PATCH = async (req) => {
    const session = await getServerSession(authOptions);
    const sessionUser = session?.user;

    if (!session || !sessionUser || sessionUser.role !== 'admin') {
        return NextResponse.json({ msg: "Unauthorized access." }, { status: 401 });
    }

    try {
        const data = await req.json();
        const { userId, subRole } = data;


        const updatedUser = await updateUserSubrole(userId, subRole);


        
        return NextResponse.json({ updatedUser }, { status: 200 });

    } catch (error) {
        
        let [errors, status] = generatePatchErrors(errors) 


        return NextResponse.json({ errors: errors }, { status});
    }
}

export default PATCH;
