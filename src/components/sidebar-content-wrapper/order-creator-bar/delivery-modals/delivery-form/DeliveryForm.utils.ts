import { object, string } from 'yup'
import { InputSelectItemType } from 'types/index'
import { validationDelivery, validationUser } from 'utils/index'

export const initialValues = {
  clientInfo: {
    name: '',
    email: '',
    phoneNumber: '',
    paymentMethod: 'Cash',
    description: '',

    address: {
      city: '',
      street: '',
      house: '',
      apartment: '',
    },
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
  clientInfo: object().shape({
    name: validationUser.name(true, 'The name is required'),
    phoneNumber: validationUser.phoneNumber(true),
    paymentMethod: string().required(),
    email: validationUser.email(),
    description: string(),

    address: object().shape({
      city: validationDelivery.city(),
      street: validationDelivery.street(true),
      house: validationDelivery.house(true, 'The house is required'),
      apartment: validationDelivery.house(),
    }),
  }),
})
