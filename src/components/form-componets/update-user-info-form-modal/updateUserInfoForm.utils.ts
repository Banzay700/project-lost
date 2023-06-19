import { InputSelectItemType } from 'types'
import { object } from 'yup'
import { validationUser } from 'utils'

export const selectInputItemsStatus: InputSelectItemType[] = [
  { value: 'active', title: 'Active' },
  { value: 'inactive', title: 'Inactive' },
]

export const selectInputItemsRole: InputSelectItemType[] = [
  { value: 'Admin', title: 'Admin' },
  { value: 'Waiter', title: 'Waiter' },
  { value: 'Courier', title: 'Courier' },
]

export const validationSchema = object().shape({
  role: validationUser.role(),
  status: validationUser.status(),
})
