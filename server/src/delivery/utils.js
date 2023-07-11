import OrderDB from '../orders/OrdersModel.js';
import BillDB from '../bills/BillsModel.js';
import DeliveryDB from './DeliveryModel.js';

export const calculateTotalPriceWithTenPercentDishes = calculateArray => {
    if (!calculateArray) return 0;

    const result = calculateArray.reduce((acc, curr) => {
        return acc + curr?.dishTotalPrice || 0;
    }, 0);
    return result * 0.1 + result;
};

export const createDEliveriesInDatabase = async () => {
    const orders = await OrderDB.find({ orderType: 'delivery' });

    orders.map(async orders => {
        const time = Math.floor(Math.random() * (50 - 10 + 1)) + 50;

        const [bill] = await BillDB.find({ orderID: orders._id });

        const element = {
            status: 'closed',
            createdAt: orders.createdAt,
            updatedAt: orders.createdAt,
            order: orders._id,
            clientInfo: {
                name: 'Julia',
                phoneNumber: '+38 (098) 3648 252',
                paymentMethod: bill.paymentMethod,
                email: 'bullet.jul@gmail.com',
            },
            address: {
                street: 'Volodymyrska Street, 33, Kyiv, Ukraine',
                latitude: '50.45039790000001',
                longitude: '30.51540889999999',
            },
            time,
            courier: '64ac42e2f984a3b7443e352f',
        };

        await DeliveryDB.create(element);
    });
};
