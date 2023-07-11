import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } from '../config/config.js';
import { billEmail } from './emailTemplates.js';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});

export const sendEmail = async ({ dishes, email, totalPrice, orderNumber }) => {
    await transporter.sendMail({
        from: SMTP_USER,
        to: email,
        subject: 'Your bills from FOLKS ✔',
        text: '',
        html: `${billEmail({ dishes, email, totalPrice, orderNumber })}}
        `,
    });
};

export const sendEmailRegistration = async ({ email, firstName, secondName, password }) => {
    await transporter.sendMail({
        from: SMTP_USER,
        to: email,
        subject: 'Your Registration from FOLKS ✔',
        text: '',
        html: `<span>Hello, Dear ${firstName} ${secondName}. There is your registration success, your password: ${password}</span>
      
        `,
    });
};
