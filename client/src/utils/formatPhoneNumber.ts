import { REGEX } from 'utils/regex'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatPhoneNumber = (formValues: any) => {
  const { phoneNumber, ...rest } = formValues

  return {
    ...rest,
    phoneNumber: phoneNumber?.replace(REGEX.PHONE_NUMBER_DB, ''),
  }
}
