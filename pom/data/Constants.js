import { configDotenv } from "dotenv";

configDotenv();

export const URLS ={
    BASE_URL: process.env.BASE_URL
}

export const CREDENTIALS ={
    VALID_CREDENTIALS: {
        EMAIL: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_CREDENTIALS: {
        EMAIL: 'invalid_email',
        PASSWORD: 'invalid password'
    }
}
;