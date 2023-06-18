import { object } from 'yup'
import { validatePicture } from 'utils'
import { UserAvatar } from 'types'

export const initialValues: UserAvatar = {
  picture: null,
}

export const validationSchema = object().shape({
  picture: validatePicture,
})
