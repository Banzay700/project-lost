import { DeliveryDAL } from "./DeliveryDAL.js";
import { sendDEliveredMsg } from "../bot/telegramBot.js";
import { createError } from "../utils/error.js";
import { BillsDAL } from "../bills/BillsDAL.js";
import { calculateTotalPriceWithTenPercentDishes } from "./utils.js";

const create = async (delivery) => {
  const createdDelivery = await DeliveryDAL.create(delivery);
  return createdDelivery;
};

const getAll = async (query) => {
  const { page, limit, ...rest } = query;

  const findValue = { courier: { $exists: false }, status: "opened" };

  if (rest.status && rest.courier) {
    findValue.courier = rest.courier;
    findValue.status = rest.status;
  }

  const deliveries = await DeliveryDAL.findAll({ page, limit, findValue });
  return deliveries;
};

const getOne = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const delivery = await DeliveryDAL.findByID(id);
  return delivery;
};

const update = async (delivery) => {
  if (!delivery.id) {
    throw new Error("ID was not set");
  }

  const updateDelivery = await DeliveryDAL.update(delivery);

  if (delivery.bill && updateDelivery) {
    const { bill, clientInfo } = updateDelivery;
    await BillsDAL.update({
      id: bill,
      paymentMethod: clientInfo.paymentMethod,
      email: clientInfo?.email || "",
      status: "closed",
      dishes: updateDelivery?.order?.dishes,
      totalPrice: calculateTotalPriceWithTenPercentDishes(
        updateDelivery?.order?.dishes
      ),
    });
  }

  return updateDelivery;
};

const deleteDelivery = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const delivery = await DeliveryDAL.deleteDelivery(id);

  return delivery;
};

const sendMsg = async (id) => {
  if (!id) {
    throw new Error("ID was not set");
  }
  const { clientInfo } = await DeliveryDAL.findByID(id);
  const { phoneNumber, name } = clientInfo;

  if (!phoneNumber) {
    throw new Error("phoneNumber was not added");
  }

  try {
    await sendDEliveredMsg({ phoneNumber, name });
    return phoneNumber;
  } catch (error) {
    if (!!error.statusCode) {
      throw createError(error.message, error.statusCode);
    }
    throw new Error(error.message);
  }
};

export const DeliveryService = {
  create,
  getAll,
  getOne,
  update,
  deleteDelivery,
  sendMsg,
};
