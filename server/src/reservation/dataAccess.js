import { ReservationModel } from './model.js'

const create = async body => new ReservationModel(body).save()

const getOne = async id => {
  return ReservationModel.findById(id).populate('table')
}

const getAll = async props => {
  return ReservationModel.find(props).populate('table')
}

const update = async body => {
  const { id, ...reservation } = body
  return ReservationModel.findByIdAndUpdate(id, reservation)
}

const deleteOne = async id => {
  return ReservationModel.findByIdAndDelete(id)
}

export const ReservationDataAccess = {
  create,
  getOne,
  getAll,
  update,
  deleteOne,
}
