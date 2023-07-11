import { BillsDAL } from "./BillsDAL.js";
import { OrderDAL } from "../orders/OrdersDAL.js";
import { sendEmail } from "../mail/MailService.js";
import { checkTotalPrice } from "./utils.js";
import { DeliveryDAL } from "../delivery/DeliveryDAL.js";

const create = async (bill) => {
  const { dishes, orderType } = await OrderDAL.findByID(bill.orderID);
  checkTotalPrice({ dishes, totalPrice: bill.totalPrice });
  await OrderDAL.updateStatus(bill.orderID);

  const createdBill = await BillsDAL.create(bill);

  if (orderType === "delivery") {
    await DeliveryDAL.updateOne({
      find: { order: bill.orderID },
      data: { bill: createdBill._id },
    });
  }

  return createdBill;
};

const getAll = async (query) => {
  if (query.orderType) {
    query.orderType = { $in: query.orderType?.split(",") };
  }

  const { page, limit, ...paramsQuery } = query;

  const findValue = { $and: [paramsQuery] };

  const bills = await BillsDAL.findAll({ page, limit, findValue });
  return bills;
};

const getOne = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const [bill] = await BillsDAL.findByID(id);
  return bill;
};

const update = async (bill) => {
  if (!bill.id) {
    throw new Error("ID was not set");
  }

  if (!!bill.totalPrice && !!bill.dishes) {
    checkTotalPrice({ ...bill });
  }

  const updateBill = await BillsDAL.update(bill);
  return updateBill;
};

const deleteBill = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const bill = await BillsDAL.deleteBill(id);

  return bill;
};

const sendBill = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const [{ email, dishes, totalPrice, orderNumber }] = await BillsDAL.findByID(
    id
  );

  if (!email) {
    throw new Error("email was not added");
  }

  sendEmail({ email, dishes, totalPrice, orderNumber });
  return email;
};

export const BillsService = {
  create,
  getAll,
  getOne,
  update,
  deleteBill,
  sendBill,
};
