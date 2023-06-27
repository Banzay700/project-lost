import dayjs from 'dayjs'
import { array, number, object, string } from 'yup'
import { ReservationFormType, TableType } from 'types'
import { reservationSchemaItems } from 'utils/validationSchemaItems/validationSchemaReservationItems'
import { validationUser } from 'utils/validationSchemaItems'

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
  tags: array().of(string()),
  date: reservationSchemaItems.date,
  hours: reservationSchemaItems.hours,
  minutes: reservationSchemaItems.minutes,
  persons: number(),
  clientName: validationUser.name(true),
  email: validationUser.email(false),
  phoneNumber: validationUser.phoneNumber(true),
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
