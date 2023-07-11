import { TablesDataAccess } from "./dataAccess.js";
import { prepareTablesData } from "./utils.js";
import { CHANGING_TABLE_STATUS_TIMER } from "./constants.js";
import { ReservationDataAccess } from "../reservation/dataAccess.js";

const getCanvas = async () => {
  const tables = await TablesDataAccess.getAll();
  const reservations = await ReservationDataAccess.getAll({ status: "active" });

  return prepareTablesData(tables, reservations);
};

const getAll = async () => {
  return await TablesDataAccess.getAll();
};

const getFree = async () => {
  const allTables = await TablesDataAccess.getAll();

  return allTables
    .filter(({ status }) => status === "free")
    .map(({ number, id }) => ({ number, id }));
};

const getTableStatus = async (tableNumber) => {
  const { status } = await TablesDataAccess.getTableByName(tableNumber);

  return status;
};

const addNewTable = async (body) => {
  return await TablesDataAccess.addNew(body);
};

const changeTableStatus = async (tableNumber) => {
  const { id, status } = await TablesDataAccess.getTableByName(tableNumber);
  const newStatus =
    status === "free" ? "pre-order" : status === "pre-order" ? "busy" : "free";

  setTimeout(async () => {
    const { id, status } = await TablesDataAccess.getTableByName(tableNumber);

    if (status === "pre-order") {
      await TablesDataAccess.updateTableInfo(id, { status: "free" });
    }
  }, CHANGING_TABLE_STATUS_TIMER);

  return await TablesDataAccess.updateTableInfo(id, { status: newStatus });
};

const deleteTable = async (id) => {
  return await TablesDataAccess.deleteTable(id);
};

export const TableService = {
  getAll,
  getCanvas,
  getFree,
  getTableStatus,
  addNewTable,
  changeTableStatus,
  deleteTable,
};
