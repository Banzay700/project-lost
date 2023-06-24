import { string } from 'yup'

export const phoneNumber = string()
  .min(8)
  .required('Phone is a required field')
  .test('Check Ukrainian Number', 'Invalid phone number', function () {
    const contact = this.parent.phoneNumber
    if (!!contact && /^\+?380\d+/.test(contact)) {
      return /^\+?380\d{9}/.test(contact)
    }
    return /^\+?[1-9]\d{8,19}$/.test(contact)
  })
