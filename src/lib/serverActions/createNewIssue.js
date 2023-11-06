"use server";
import { findIssueBySlug } from "@/database/issues";
import { generateUrlSlug } from "@/lib/generateUrlSlug";
import { secureAgainstAppr } from "../secureAgainstAppr";
import { validateIssue } from "../validations"; // You need to implement this function
import { createIssue } from "@/database/issues/createIssue";

export const createNewIssue = async (formData, companyName) => {
    await secureAgainstAppr()

    const errors = await validateIssue(formData);

    if (errors.length) {
        return { errors };
    }

    try {
        const slugPrefix = `${companyName.toLowerCase().replaceAll(' ', '-')}-issue`
        const urlSlug = await generateUrlSlug(slugPrefix, findIssueBySlug);
        formData.urlSlug = urlSlug;
        
        const newIssue = await createIssue(formData);
        
        
        return newIssue;

    } catch (error) {
        // Handle errors (e.g., database errors, etc.)


        return { errors: ["An error occurred while creating the issue."] };
    }
};
