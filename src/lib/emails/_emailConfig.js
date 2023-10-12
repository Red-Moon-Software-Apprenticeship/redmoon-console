const {SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD} = process.env;

export const emailConfig = { 
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD
    }

}

export const DEFAULT_WORD_WRAP = 130;