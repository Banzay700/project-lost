export const getClientInfo = {
    reply_markup: {
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [
            [
                {
                    text: 'Share your contact',
                    request_contact: true,
                },
            ],
        ],
    },
};
