import dayjs from 'dayjs'
import { ReservationDataAccess } from './dataAccess.js'
import { getTodayReservations } from './utils.js'

const create = async body => {
  return await ReservationDataAccess.create(body)
}

const getOne = async id => {
  return await ReservationDataAccess.getOne(id)
}

const getAll = async () => {
  return await ReservationDataAccess.getAll()
}

const getByDate = async data => {
  const reservations = await ReservationDataAccess.getAll()

  return reservations.filter(({ date }) => dayjs(data).isSame(date))
}

const getInfo = async tableNumber => {
  const reservations = await ReservationDataAccess.getAll()
  const todayReservations = getTodayReservations(reservations)
  const reservationsTime = todayReservations
    .filter(reservation => reservation.table.number === tableNumber)
    .map(({ time }) => time)

  if (reservationsTime.length) {
    return {
      message: `Table ${tableNumber} is currently reserved for the following hours:`,
      reservationsTime,
    }
  } else {
    return { message: 'No reservations for this table', reservationsTime }
  }
}

const deleteOne = async id => {
  return await ReservationDataAccess.deleteOne(id)
}

const update = async body => {
  return await ReservationDataAccess.update(body)
}

export const ReservationService = {
  create,
  getOne,
  getAll,
  getByDate,
  update,
  deleteOne,
  getInfo,
}
