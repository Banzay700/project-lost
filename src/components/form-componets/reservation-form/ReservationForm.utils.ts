import dayjs from 'dayjs'
import { array, number, object, string } from 'yup'
import { ReservationFormType, TableType } from 'types'
import { REGEX, reservationValidationItems, validationUser } from 'utils'

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
  date: reservationValidationItems.date(),
  hours: reservationValidationItems.hours(true),
  minutes: reservationValidationItems.minutes(true),
  persons: number(),
  clientName: validationUser.name(true),
  email: validationUser.email(),
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
  const { date, hours, minutes, phoneNumber, ...rest } = values
  const time = `${hours}:${minutes}`

  return {
    ...rest,
    time,
    phoneNumber: phoneNumber.replace(REGEX.PHONE_NUMBER_DB, ''),
    date: dayjs(date).format('YYYY-MM-DD'),
    table: activeTable.id,
  }
}
