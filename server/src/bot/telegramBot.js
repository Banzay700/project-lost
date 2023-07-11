import TelegramAPI from 'node-telegram-bot-api';
import { TELEGRAM_TOKEN as token } from '../config/config.js';
import { TelegaClientService } from './TelegaClientService.js';
import { getClientInfo } from './utils.js';
import { createError } from '../utils/error.js';

const bot = new TelegramAPI(token, { polling: true });

export const startBot = () => {
    bot.setMyCommands([
        { command: '/start', description: 'Start work with bot' },
        { command: '/info', description: 'Information about bot' },
        { command: '/share_phone_number', description: 'Share your contact for receiving messages' },
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const name = msg.from.first_name;
        const nickname = msg.from.username;

        try {
            const client = await TelegaClientService.find({ nickname });
            !client?.length && (await TelegaClientService.create({ chatId, name, nickname }));

            if (text === '/start') {
                return bot.sendMessage(chatId, `Hey, ${name || nickname}, please share you phone number`, getClientInfo);
            }

            if (text === '/share_phone_number') {
                return bot.sendMessage(chatId, `Share your contact and we can send you message about delivery status`, getClientInfo);
            }

            if (text === '/info') {
                return bot.sendMessage(chatId, `Folks Restaurant Delivery Bot. You will receive message when your food order is being delivered.`);
            }
            if (!!text) {
                return bot.sendMessage(chatId, `Received your message ${text}, but don't understand you`);
            }
        } catch (error) {
            return bot.sendMessage(chatId, `Something went wrong`);
        }
    });

    bot.on('contact', async msg => {
        const nickname = msg.from.username;
        const userId = msg.from.id;
        const phoneNumber = msg.contact.phone_number;

        try {
            await TelegaClientService.update({ nickname, userId, phoneNumber });

            return bot.sendMessage(userId, 'Thanks');
        } catch (error) {
            return bot.sendMessage(userId, `Something went wrong`);
        }
    });
};

export const sendDEliveredMsg = async ({ phoneNumber, name }) => {
    const phoneNumberOnlyDigit = phoneNumber.replace(/\D/g, '');
    const client = await TelegaClientService.find({ phoneNumber: `+${phoneNumberOnlyDigit}` });

    try {
        const [{ userId, name: tgName }] = client;
        const username = name || tgName;
        return bot.sendMessage(userId, ` ${username}, your order is going to be delivered soon.`);
    } catch (error) {
        throw createError('the client`s number was not found in telegram DB', 404);
    }
};
