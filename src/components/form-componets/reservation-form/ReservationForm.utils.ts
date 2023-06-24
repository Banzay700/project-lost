import dayjs from 'dayjs'
import { array, number, object, string } from 'yup'
import { ReservationFormType, TableType } from 'types'
import { phoneNumber } from 'utils/validationSchemaItems'

export const initialValues: Partial<ReservationFormType> = {
  tags: [],
  date: '',
  hours: '',
  minutes: '',
  persons: 0,
  clientName: '',
  email: '',
  phoneNumber: '',
  note: '',
}

export const validationSchema = object().shape({
  tags: array(),
  date: string().required(),
  hours: number().integer().min(0).max(24).required(),
  minutes: number().integer().min(0).max(60).required(),
  persons: number(),
  clientName: string().required(),
  email: string().email(),
  phoneNumber,
  note: string(),
})

export const tags = [
  { value: 'vip', title: 'VIP' },
  { value: 'birthday', title: 'Birthday' },
  { value: 'anniversary', title: 'Anniversary' },
  { value: 'privateDining', title: 'Private Dining' },
  { value: 'firstTime', title: 'First time' },
]

export const prepareReservationData = (values: ReservationFormType, activeTable: TableType) => {
  const { date, hours, minutes, ...rest } = values
  const time = `${hours}:${minutes}`

  return {
    ...rest,
    time,
    date: dayjs(date).format('YYYY-MM-DD'),
    table: activeTable.id,
  }
}
