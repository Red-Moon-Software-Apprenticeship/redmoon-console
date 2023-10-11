const {EMAIL_HOST, EMAIL_ADDRESS, EMAIL_PASSWORD} = process.env;

export const emailConfig = { 
    host: process.env.EMAIL_HOST,
    port:587,
    secure: false,
    auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD
    }

}