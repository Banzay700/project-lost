import { FC, useEffect } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'
import cn from 'classnames'

import { InputVariantPropsType } from 'types'
import { IconWrapper } from './icon-wrapper'
import s from './Input.module.scss'

type InputProps = InputVariantPropsType & {
  placeholder: string
  name: string
  type?: string
  valueExternal?: string
}

const Input: FC<InputProps> = (props) => {
  const { name, label, placeholder, icon, outlined, type, valueExternal } = props
  const [field, meta, helpers] = useField(name)

  useEffect(() => {
    const setValue = () => helpers.setValue(valueExternal, true)
    setValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueExternal])

  const inputClasses = cn(s.input, { [s.withIcon]: icon, [s.outlined]: outlined })
  const textFieldConfig: TextFieldProps = {
    placeholder,
    label,
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

  return <TextField {...textFieldConfig} />
}

export default Input
