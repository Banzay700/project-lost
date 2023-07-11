import mongoose from 'mongoose'
import { app } from './index.js'
import { connectionOptions, DB_URL, PORT } from './src/config/config.js'
import { consoleInfo } from './src/utils/logger.js'
;(async () => {
  try {
    await mongoose.connect(DB_URL, connectionOptions)
    consoleInfo('Connected to DB')

    app.listen(PORT, err => {
      if (err) throw new Error(err)
      consoleInfo(`Server listening on port http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
})()
