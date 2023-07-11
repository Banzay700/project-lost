import { Model } from './model.js'

const getAll = async () => Model.find()

const addNew = async body => new Model(body).save()

const getTable = async id => Model.findById(id)

const getTableByName = async tableNumber => Model.findOne({ number: tableNumber })

const deleteTable = async id => Model.findByIdAndDelete(id)

const updateTableInfo = async (id, data) => Model.findByIdAndUpdate(id, data)

export const TablesDataAccess = {
  getAll,
  addNew,
  getTable,
  getTableByName,
  updateTableInfo,
  deleteTable,
}
