import { object } from 'yup'
import { validationPicture } from 'utils'
import { UserAvatar } from 'types'

export const initialValues: UserAvatar = {
  picture: null,
}

export const validationSchema = object().shape({
  picture: validationPicture,
})
