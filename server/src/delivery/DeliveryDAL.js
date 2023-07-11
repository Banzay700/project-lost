import DeliveryDB from "./DeliveryModel.js";

const create = async (delivery) => {
  return DeliveryDB.create(delivery);
};

const findAll = async ({ page, limit, findValue }) => {
  const totalCount = await DeliveryDB.countDocuments(findValue);

  const data = await DeliveryDB.find(findValue)
    .sort({ time: 1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .select("-createdAt -updatedAt")
    .populate("courier", "firstName secondName")
    .populate("order", "dishes description orderNumber status");
  return { data, totalCount };
};

const findByID = async (id) => {
  return DeliveryDB.findById(id)
    .select("-createdAt -updatedAt")
    .populate("courier", "firstName secondName")
    .populate("order", "dishes description orderNumber status");
};

const update = async (delivery) => {
  if (!delivery.courier) {
    delivery.$unset = { courier: 1 };
  }

  return DeliveryDB.findByIdAndUpdate(delivery.id, delivery, {
    new: true,
  }).populate("order");
};

const updateOne = async ({ find, data }) => {
  return DeliveryDB.findOneAndUpdate(find, data, { new: true });
};
const deleteDelivery = async (id) => {
  return DeliveryDB.findByIdAndDelete(id);
};

export const DeliveryDAL = {
  create,
  findAll,
  findByID,
  updateOne,
  update,
  deleteDelivery,
};
