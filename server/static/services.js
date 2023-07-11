import path from 'path'
import { readFile } from 'fs'

const getFile = async params => {
  const { dirName, fileName } = params
  const filePath = path.join(process.cwd(), 'static', dirName, fileName)

  return await new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const StaticService = {
  getFile,
}
