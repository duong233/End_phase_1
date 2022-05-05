import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config({path: __dirname+'../../.env'})

export const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS
    },
    logger: true,
    tls: {
        rejectUnauthorized: false,
    },
});