import { ChangeEvent, FC } from 'react'
import { TextFieldProps } from '@mui/material'
import { useField } from 'formik'

import { InputVariantItemType } from 'types'
import { FadeIn } from 'utils'
import { IconWrapper } from './icon-wrapper'
import { InputWrapper } from './Input.styled'

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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
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
    onChange,
  } = props
  const [field, meta] = useField(name)

  const styles = icon ? 'withIcon' : 'outlined'
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
      <InputWrapper
        {...textFieldConfig}
        $styles={styles}
        inputRef={(input) => focus && input && input.focus()}
      />
    </FadeIn>
  )
}

export default Input
