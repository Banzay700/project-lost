import { FC } from 'react'
import { useField } from 'formik'
import { FadeIn } from 'utils'

import { InputPropsType } from 'types'
import { IconWrapper } from './icon-wrapper'
import { InputWrapper } from './Input.styled'

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
    error: false,
    helperText: '',
    InputProps: icon ? { startAdornment: <IconWrapper>{icon}</IconWrapper> } : {},
    inputProps: {
      maxLength,
      onChange,
    },
  }

  if (meta.touched && meta.error) {
    textFieldConfig.error = true
    textFieldConfig.helperText = meta.error
  }

  return (
    <FadeIn delay={50} styles={{ width: '100%' }}>
      <InputWrapper {...textFieldConfig} focused={focus} fullWidth />
    </FadeIn>
  )
}

export default Input
