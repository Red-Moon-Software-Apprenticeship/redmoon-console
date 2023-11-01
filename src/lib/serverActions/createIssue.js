"use server";
import { generateUrlSlug } from "../generateUrlSlug";
import { validateIssue } from "../validations"; // You need to implement this function
import { upsertIssue } from "@/database/issues/upsertIssues";

export const createIssue = async (formData) => {

    const errors = await validateIssue(formData);

    if (errors.length) {
        return { errors };
    }


    try {
        const urlSlug = await generateUrlSlug(title);



        const newIssue = await upsertIssue(formData)


        return newIssue;

    } catch (error) {
        // Handle errors (e.g., database errors, etc.)
        console.error("Error creating issue:", error);
        return { errors: ["An error occurred while creating the issue."] };
    }
};
