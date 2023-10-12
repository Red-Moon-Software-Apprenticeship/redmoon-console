import {createTransport} from 'nodemailer'
import { emailConfig } from './_emailConfig'

export const buildEmailContents = (toParty, subject, text, htmlBody)=>(
    {
        to: toParty,
        subject,
        text,
        html: htmlBody
    }
)


export const sendEmail = async (emailOptions)=>{

    try{
        let transporter = createTransport(emailConfig)
    
        emailOptions['from'] = OUR_EMAIL_ADDRESS

        let info = await transporter.sendMail(emailOptions)

        console.log('success')
            
    } catch(error) {
        console.error('Error sending the email.')


    }



}

