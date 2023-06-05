import { FC } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import cn from 'classnames'

import { InputVariantItemType } from 'types'
import { FadeIn } from 'utils/index'
import { IconWrapper } from './icon-wrapper'
import s from './Input.module.scss'

type InputProps = InputVariantItemType & {
  placeholder: string
  name: string
  type?: string
  multiline?: boolean
  maxRows?: number
  minRows?: number
  disabled?: boolean
  focus?: boolean
}

const Input: FC<InputProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    icon,
    outlined,
    type,
    multiline,
    maxRows,
    minRows,
    disabled,
    focus,
  } = props
  const [field, meta] = useField(name)

  const inputClasses = cn(s.input, { [s.withIcon]: icon, [s.outlined]: outlined })
  const textFieldConfig: TextFieldProps = {
    placeholder,
    label,
    multiline,
    maxRows,
    minRows,
    disabled,
    type: type || 'text',
    ...field,
    fullWidth: true,
    InputProps: icon ? { startAdornment: <IconWrapper>{icon}</IconWrapper> } : {},
    className: inputClasses,
  }

  if (meta.touched && meta.error) {
    textFieldConfig.error = true
    textFieldConfig.helperText = meta.error
  }

  return (
    <FadeIn delay={50}>
      <TextField {...textFieldConfig} inputRef={(input) => focus && input && input.focus()} />
    </FadeIn>
  )
}

export default Input
