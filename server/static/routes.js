import { Router } from 'express'
import { StaticController } from './controllers.js'

export const staticRouter = new Router()
export const staticDefaultPath = '/api/static'

staticRouter.get('/:dirName/:fileName', StaticController.getFile)
