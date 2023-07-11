import mongoose from "mongoose";
import BillDB from "./BillsModel.js";
import { getBillsDATA } from "./utils.js";

const create = async (bill) => {
  return BillDB.create(bill);
};

const findAll = async ({ page, limit, findValue }) => {
  const [{ paginatedResults, count }] = await BillDB.aggregate([
    ...getBillsDATA,
    {
      $match: findValue,
    },
    {
      $sort: { status: -1, createdAt: -1 },
    },
    {
      $facet: {
        paginatedResults: [
          { $skip: (page - 1) * limit || 0 },
          { $limit: Number(limit || 20) },
        ],
        count: [
          {
            $count: "count",
          },
        ],
      },
    },
  ]);

  if (!!count?.length) {
    const [{ count: totalCount }] = count;
    return { data: paginatedResults, totalCount };
  }
  return { data: paginatedResults, totalCount: 0 };
};

const findByID = async (id) => {
  const objectId = new mongoose.Types.ObjectId(id);

  return BillDB.aggregate([
    {
      $match: { _id: objectId },
    },
    ...getBillsDATA,
  ]);
};

const update = async (bill) => {
  return BillDB.findByIdAndUpdate(bill.id, bill, { new: true });
};

const deleteBill = async (id) => {
  return BillDB.findByIdAndDelete(id);
};

const find = async ({ find, field }) => {
  return BillDB.find(find, field).populate({
    path: "orderID",
    populate: {
      path: "dishes",
      populate: {
        path: "dishID",
        select: "category",
      },
    },
  });
};

const findAggregate = async (aggregateSchema) => {
  return BillDB.aggregate(aggregateSchema);
};

export const BillsDAL = {
  create,
  findAll,
  findByID,
  update,
  deleteBill,
  find,
  findAggregate,
};
