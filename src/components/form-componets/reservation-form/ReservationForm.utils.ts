import { array, number, object, string } from 'yup'
import { ReservationFormType } from 'types/ComponentsReturnType'

export const initialValues: Partial<ReservationFormType> = {
  tags: [],
  date: '',
  hours: '',
  minutes: '',
  partySize: 0,
  name: '',
  email: '',
  phoneNumber: '',
  note: '',
}

export const tags = [
  { value: 'vip', title: 'VIP' },
  { value: 'birthday', title: 'Birthday' },
  { value: 'anniversary', title: 'Anniversary' },
  { value: 'privateDining', title: 'Private Dining' },
  { value: 'firstTime', title: 'First time' },
]

export const validationSchema = object().shape({
  tags: array(),
  date: string().required(),
  hours: number().integer().min(0).max(24).required(),
  minutes: number().integer().min(0).max(60).required(),
  partySize: number(),
  name: string().required(),
  email: string().email(),
  phoneNumber: string().min(10),
  note: string(),
})
