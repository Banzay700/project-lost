import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { resolve } from 'path';
import { tablesDefaultPath, tablesRouter } from './src/tables/routes.js';
import { orderDefaultPath, orderRouter } from './src/orders/orderRouter.js';
import { dishesDefaultPath, dishRouter } from './src/dishes/dishesRouter.js';
import { categoriesDefaultPath, categoryRouter } from './src/categories/CategoriesRouter.js';
import { billsDefaultPath, billsRouter } from './src/bills/billsRouter.js';
import { userDefaultPath, usersRouter } from './src/users/usersRouter.js';
import { reservationDefaultPath, reservationRouter } from './src/reservation/routes.js';
import { deliveryDefaultPath, deliveryRouter } from './src/delivery/deliveryRouter.js';
import { staticDefaultPath, staticRouter } from './static/routes.js';

import { startBot } from './src/bot/telegramBot.js';
import { analyticsDefaultPath, analyticsRouter } from './src/analytics/routes.js';

import { createOrdersInDatabase } from './src/orders/utils.js';
import { createBillsInDatabase } from './src/bills/utils.js';
import { createDEliveriesInDatabase } from './src/delivery/utils.js';

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.static(resolve(process.cwd(), 'static')));
app.use(cookieParser());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, ');
    next();
});

app.use(staticDefaultPath, staticRouter);
app.use(tablesDefaultPath, tablesRouter);
app.use(orderDefaultPath, orderRouter);
app.use(dishesDefaultPath, dishRouter);
app.use(categoriesDefaultPath, categoryRouter);
app.use(billsDefaultPath, billsRouter);
app.use(reservationDefaultPath, reservationRouter);
app.use(userDefaultPath, usersRouter);
app.use(deliveryDefaultPath, deliveryRouter);
app.use(analyticsDefaultPath, analyticsRouter);

startBot();

const createDB = async () => {
    await createOrdersInDatabase();
    await createBillsInDatabase();
    await createDEliveriesInDatabase();
};
