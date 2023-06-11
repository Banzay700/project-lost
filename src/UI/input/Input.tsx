import { ChangeEvent, FC } from 'react'
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
  maxLength?: number
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void
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
    maxLength,
    onInput,
  } = props
  const [field, meta] = useField(name)

  const inputClasses = cn({ [s.withIcon]: icon, [s.outlined]: outlined })
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
    inputProps: {
      maxLength,
    },
  }

  if (meta.touched && meta.error) {
    textFieldConfig.error = true
    textFieldConfig.helperText = meta.error
  }

  return (
    <FadeIn delay={50} styles={{ width: '100%' }}>
      <TextField
        {...textFieldConfig}
        inputRef={(input) => focus && input && input.focus()}
        onInput={onInput}
      />
    </FadeIn>
  )
}

export default Input
