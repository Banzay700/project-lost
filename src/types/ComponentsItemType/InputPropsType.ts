import { ChangeEvent, ReactNode } from 'react'
import { TextFieldProps } from '@mui/material'

export type InputPropsType = TextFieldProps & { error?: boolean; helperText?: string } & {
  placeholder: string
  name: string
  type?: string
  multiline?: boolean
  maxRows?: number
  minRows?: number
  disabled?: boolean
  focus?: boolean
  maxLength?: number
  fullWidth?: boolean
  icon?: ReactNode
  outlined?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
