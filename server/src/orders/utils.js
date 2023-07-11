import { DishesDAL } from '../dishes/DishesDAL.js';
import DishDB from '../dishes/DishesModel.js';
import OrderDB from './OrdersModel.js';

export const findAdditionalFields = async order => {
    const { dishes } = order;
    const totalDishInfo = await Promise.all(
        dishes.map(async item => {
            const { title, price, picture } = await DishesDAL.findByID(item.dishID);
            const dishTotalPrice = item.amount * price;
            return { ...item, dishTotalPrice, title, price, picture };
        })
    );

    return totalDishInfo;
};

export const createOrdersInDatabase = async () => {
    const startDate = new Date(2023, 0, 1);
    const numElements = 191;

    for (let i = 0; i < numElements; i++) {
        const createdAt = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
        const orderNumber = Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000;

        const pipeline = [
            { $sample: { size: 3 } },
            {
                $project: {
                    dishID: '$_id',
                    _id: 0,
                    title: 1,
                    price: 1,
                    picture: 1,
                },
            },
            {
                $addFields: {
                    amount: 1,
                    dishTotalPrice: '$price',
                },
            },
        ];

        const dishes = await DishDB.aggregate(pipeline);
        let totalPrice = 0;
        dishes.map(({ price }) => (totalPrice += price));

        const tables = ['T-01', 'T-02', 'T-03', 'T-04', 'T-05', 'T-06', 'T-07', 'T-08', 'T-09', 'T-10', 'T-11', 'T-12', 'T-13'];

        const randomIndex = Math.floor(Math.random() * 3);
        const randomIndexT = Math.floor(Math.random() * 13);

        let orderType;
        let table;
        if (randomIndex === 0) {
            orderType = 'takeAway';
            table = '-';
        } else if (randomIndex === 1) {
            orderType = 'delivery';
            table = '-';
        } else {
            orderType = 'dineIn';
            table = tables[randomIndexT];
        }

        const element = {
            createdAt: createdAt,
            updatedAt: createdAt,
            orderType,
            orderNumber,
            table,
            totalPrice,
            status: 'closed',
            user: '6499b44606749da134ef1959',
            dishes,
        };

        await OrderDB.create(element);
    }
};
