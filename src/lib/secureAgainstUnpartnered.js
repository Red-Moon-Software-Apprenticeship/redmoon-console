import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export const secureAgainstUnpartnered = async (session = null) => {
    if (!session) session = await getServerSession(authOptions)
    if (!session || !session.user || session.user.subRole === 'unpartnered')
        redirect('/')
}