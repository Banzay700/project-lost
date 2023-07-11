import { Router } from 'express'
import { ReservationController } from './controllers.js'

export const reservationRouter = new Router()
export const reservationDefaultPath = '/api/reservation'

reservationRouter.get('/', ReservationController.getAll)
reservationRouter.get('/:id', ReservationController.getOne)
reservationRouter.get('/date/:date', ReservationController.getByDate)
reservationRouter.get('/info/:table', ReservationController.getInfo)
reservationRouter.post('/', ReservationController.create)
reservationRouter.put('/', ReservationController.update)
reservationRouter.delete('/:id', ReservationController.deleteOne)
