"use server"
import { hash, compare } from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { findUsersPassword } from "@/database/users/findUser";
import { updatePassword } from "@/database/users/updatePassword";

export const changePassword = async (formData, userId) => {
    const { currentPassword, newPassword, confirmPassword } = Object.fromEntries(formData);

    try {

        const session = await getServerSession(authOptions);

        if (session?.user?.id !== userId) {
            throw new Error("You are not authorized to change the password!");
        }

        if (newPassword !== confirmPassword) {
            throw new Error("Passwords do not match!");
        }

        const { hashedPassword } = await findUsersPassword(userId);

        if (!await compare(currentPassword, hashedPassword)) {
            throw new Error("Your password entry is incorrect!");
        }

        const newHashedPassword = await hash(newPassword, 11);

        const { userId } = await updatePassword(userId, newHashedPassword);

        return { msg: userId }

    } catch (error) {
        const errors = []
        errors.push(error.message)
        return ({ errors })
    }


}