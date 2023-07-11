import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

export const { DB_URL, PORT, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, TELEGRAM_TOKEN } = process.env;

export const connectionOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
