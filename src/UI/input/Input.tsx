import { FC } from 'react'
import { useField } from 'formik'

import { InputPropsType } from 'types'
import { IconWrapper } from './icon-wrapper'
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
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error
  const textFieldConfig = {
    placeholder,
    label,
    multiline,
    maxRows,
    minRows,
    disabled,
    type: type || 'text',
    ...field,
    outlined,
    fullWidth: true,
    InputProps: icon ? { startAdornment: <IconWrapper>{icon}</IconWrapper> } : {},
    inputProps: {
      maxLength,
      onChange,
    },
  }

  return (
    <InputContainer delay={50}>
      <InputWrapper {...textFieldConfig} focused={focus} fullWidth />
      {validationError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </InputContainer>
  )
}

export default Input
