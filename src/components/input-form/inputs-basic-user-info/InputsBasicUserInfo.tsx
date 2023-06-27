import { FC } from 'react'
import { Input, InputPhoneNumber } from 'UI'

interface InputsBasicUserInfoProps {
  isDisabled?: boolean
}

const InputsBasicUserInfo: FC<InputsBasicUserInfoProps> = ({ isDisabled }) => {
  return (
    <>
      <Input placeholder="First Name" name="firstName" label="First Name" disabled={isDisabled} />
      <Input
        placeholder="Second Name"
        name="secondName"
        label="Second Name"
        disabled={isDisabled}
      />
      <Input placeholder="Email" name="email" label="Email" disabled={isDisabled} />
      <InputPhoneNumber name="phoneNumber" label="Phone number" disabled={isDisabled} />
    </>
  )
}

export default InputsBasicUserInfo
