import { FC } from 'react'
import { TextField } from '@mui/material'
import cn from 'classnames'

import { InputVariantPropsType } from 'types'
import { IconWrapper } from './icon-wrapper'
import s from './Input.module.scss'

type InputProps = InputVariantPropsType & {
  placeholder: string
}

const Input: FC<InputProps> = ({ label, placeholder, icon, outlined }) => {
  const iconOptions = icon ? { startAdornment: <IconWrapper>{icon}</IconWrapper> } : {}
  const inputClasses = cn(s.input, { [s.withIcon]: icon, [s.outlined]: outlined })

  return (
    <TextField
      className={inputClasses}
      placeholder={placeholder}
      label={label}
      InputProps={iconOptions}
      fullWidth
    />
  )
}

export default Input
