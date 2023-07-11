import { FC, useState } from 'react'
import { useField } from 'formik'

import { InputPropsType } from 'types'
import { IconWrapper } from './icon-wrapper'
import { IconPassword } from './icon-password'
import { ErrorMessage, InputContainer, InputWrapper } from './Input.styled'

const Input: FC<InputPropsType> = (props) => {
  const {
    name,
    label,
    placeholder,
    icon,
    type,
    multiline,
    maxRows,
    minRows,
    disabled,
    outlined,
    focus,
    maxLength,
    onChange,
  } = props

  const [inputType, setInputType] = useState(type || 'text')
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error

  const textFieldConfig = {
    placeholder,
    label,
    multiline,
    maxRows,
    minRows,
    disabled,
    ...field,
    outlined,
    fullWidth: true,
    InputProps: icon ? { startAdornment: <IconWrapper>{icon}</IconWrapper> } : {},
    inputProps: { maxLength, onChange },
  }

  const handleShowPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  return (
    <InputContainer rows={maxRows} delay={50}>
      <InputWrapper {...textFieldConfig} focused={focus} type={inputType} />
      {type === 'password' && <IconPassword onClick={handleShowPassword} />}
      {validationError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
