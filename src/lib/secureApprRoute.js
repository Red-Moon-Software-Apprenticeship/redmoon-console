import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const secureApprRoute = async () => {
    const session = getServerSession(authOptions);
    const role = session?.user?.role;

    if (!session || !["admin", "apprentice"].includes(role)) {
        redirect("/");
    }

    
} 