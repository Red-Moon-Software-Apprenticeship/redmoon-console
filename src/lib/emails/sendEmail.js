import {createTransport} from 'nodemailer'
import { emailConfig } from './_emailConfig'
import { OUR_EMAIL_ADDRESS } from '../constants'



export const buildEmailContents = (toParty, subject, text, htmlBody)=>{
    const emailOptions = {
        from: OUR_EMAIL_ADDRESS,
        to: toParty,
        subject,
        text,
    }

    if (htmlBody) emailOptions.html = htmlBody;


    return emailOptions
}


export const sendEmail = async (emailOptions)=>{

    try{
        let transporter = createTransport(emailConfig)

        await transporter.sendMail(emailOptions)

        console.log(`succesfully sent email to ${emailOptions.to}`)
            
    } catch(error) {
        console.error(`Error sending the email: ${error}.`)


    }
}

