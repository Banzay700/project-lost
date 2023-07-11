import { StaticService } from './services.js'

const getFile = async (req, res) => {
  try {
    const data = await StaticService.getFile(req.params)

    res.status(200).json({ svg: data })
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  }
}

export const StaticController = {
  getFile,
}
