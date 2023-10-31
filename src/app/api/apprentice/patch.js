import { updateAppr } from "@/database/users/updateAppr";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { generatePatchErrors } from "@/lib/sharedErrors";

const PATCH = async (req) => {

    const session = await getServerSession(authOptions);
    const sessionUser = session?.user
    if (
        !session ||
        !sessionUser ||
        (sessionUser.role !== 'admin' && sessionUser.id !== req.userId) ||
        sessionUser.role !== 'admin'
    ) {
        return NextResponse.json({ msg: "Unauthorized access." }, { status: 401 })

    }


    try {
        const data = await req.json()
        const { userId } = data;
        delete data.userId;
        const updatedAppr = await updateAppr(data, userId)
         return NextResponse.json({ updatedAppr }, { status: 200 })

    } catch (error) {
        let {errors, status} = generatePatchErrors(error)
         return NextResponse.json({ errors }, { status })

    }

}

export default PATCH;
