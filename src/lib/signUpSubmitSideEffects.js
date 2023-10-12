import {signIn} from 'next-auth/react'
import {createReq} from "./createReqObj";


//Shared side effects for a succesful signup. 
//1. Sends a request to an email route to send a verification email to send an email to the new user
//Does NOT await for the response to come back, we actually don't want to block the client here
//Any other cleaner solutions are greatly appreciated.
//2. Signs in the new user
export const signUpSubmitSideEffects = async(res, password) => {
    const {email, verifToken: token, role } = res;
    fetch('/api/email/verify', createReq("POST", {email, token, role})) //Don't await this or even error handle it, if it fails we don't want to block the
    await signIn('credentials',
          {
            email,
            password,
            redirect: true,
            callbackUrl: role === 'apprentice' ? '/sign-up/thank-you-appr' : '/sign-up/thank-you-partner'
          }
    )
    return
}