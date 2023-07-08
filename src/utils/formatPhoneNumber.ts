import { REGEX } from 'utils/regex'

export const formatPhoneNumber = (formValues: any) => {
  const { phoneNumber, ...rest } = formValues

  return {
    ...rest,
    phoneNumber: phoneNumber.replace(REGEX.PHONE_NUMBER_DB, ''),
  }
}
