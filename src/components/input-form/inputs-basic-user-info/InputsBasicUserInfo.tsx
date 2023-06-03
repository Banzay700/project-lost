import { FC } from 'react'
import { Input } from 'UI/input'

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
      <Input
        placeholder="Phone Number"
        name="phoneNumber"
        label="Phone Number"
        disabled={isDisabled}
      />
    </>
  )
}

export default InputsBasicUserInfo
