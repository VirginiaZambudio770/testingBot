import { configDotenv } from "dotenv";

configDotenv();

export const URLS ={
    BASE_URL: process.env.BASE_URL,
    SIGNIN_URL: process.env.BASE_URL + 'users/sign_in',
    MEMBERS_URL: process.env.BASE_URL + 'members'
}

export const CREDENTIALS ={
    VALID_CREDENTIALS: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_EMAIL_FORMAT: {
        EMAIL: 'invalid_email',
        PASSWORD: 'invalid password'
    },
    INVALID_CREDENTIALS: {
        EMAIL: 'invalid_email@gmail.com',
        PASSWORD: 'invalid password'
    }
}

export const MESSAGES ={
    ERROR_MESSAGES: {
        INVALID_EMAIL_PASSWORD: 'Invalid Email or password.'
    }
};