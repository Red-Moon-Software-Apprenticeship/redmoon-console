"use server"

import { updateIssue } from "@/database/issues"
import { secureUserRoute } from "../secureUserRoute"
import { generatePatchErrors } from "../sharedErrors"

export const editIssue = async (data, userId, issueId) => {
    await secureUserRoute(userId)
    

    try {
        
        const updatedIssue = await updateIssue(issueId, data)
        return  {updatedIssue}

    } catch (error) {
        
        const {errors} = generatePatchErrors(errors)        

        return {errors}
    }

}