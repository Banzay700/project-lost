import { TableService } from './services.js'

const getCanvas = async (req, res) => {
  try {
    const data = await TableService.getCanvas()
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const getAll = async (req, res) => {
  try {
    const data = await TableService.getAll()
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const getFree = async (req, res) => {
  try {
    const data = await TableService.getFree()
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const getTableStatus = async (req, res) => {
  try {
    const data = await TableService.getTableStatus(req.params.tableNumber)
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const addNewTable = async (req, res) => {
  try {
    const data = await TableService.addNewTable(req.body)
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const deleteTable = async (req, res) => {
  try {
    const data = await TableService.deleteTable(req.params.id)
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

const updateTableStatus = async (req, res) => {
  try {
    const data = await TableService.changeTableStatus(req.params.tableNumber)
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
}

export const TableController = {
  getFree,
  getTableStatus,
  getCanvas,
  addNewTable,
  deleteTable,
  getAll,
  updateTableStatus,
}
