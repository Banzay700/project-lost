import { ReservationService } from './services.js'

const create = async (req, res) => {
  try {
    const reservation = await ReservationService.create(req.body)

    res.status(201).json(reservation)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getOne = async (req, res) => {
  try {
    const data = await ReservationService.getOne(req.params.id)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const data = await ReservationService.getAll()

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getByDate = async (req, res) => {
  try {
    const data = await ReservationService.getByDate(req.params.date)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getInfo = async (req, res) => {
  try {
    const data = await ReservationService.getInfo(req.params.table)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const update = async (req, res) => {
  try {
    const data = await ReservationService.update(req.body)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteOne = async (req, res) => {
  try {
    const data = await ReservationService.deleteOne(req.params.id)

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const ReservationController = {
  create,
  getOne,
  getAll,
  getByDate,
  update,
  deleteOne,
  getInfo,
}
