import { number, object, string } from 'yup'
import { InputSelectItemType } from 'types/index'
import { validationDelivery, validationUser } from 'utils/index'

export const initialValues = {
  time: '',
  clientInfo: {
    name: '',
    email: '',
    phoneNumber: '',
    paymentMethod: 'Cash',
    description: '',
  },
  address: {
    street: '',
    latitude: '',
    longitude: '',
  },
}

export const selectMenuItems: InputSelectItemType[] = [
  {
    value: 'Cash',
    title: 'Cash',
  },
  {
    value: 'Visa',
    title: 'Visa',
  },
  {
    value: 'MasterCard',
    title: 'MasterCard',
  },
]

export const validationSchema = object().shape({
  time: number().required(),
  clientInfo: object().shape({
    name: validationUser.name(true, 'Name is required'),
    phoneNumber: validationUser.phoneNumber(true),
    paymentMethod: string().required(),
    email: validationUser.email(),
    description: string(),
  }),
  address: object().shape({
    street: validationDelivery.street(true),
  }),
})
