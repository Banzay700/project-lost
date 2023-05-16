import ButtonMUI from '@mui/material/Button'
import { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Typography } from '@mui/material'
import cn from 'classnames'
import s from './Button.module.scss'

interface ButtonProps extends PropsWithChildren {
  variant: 'contained' | 'outlined' | 'text'
  size: 'small' | 'default'
  color?: 'secondary'
  startIcon?: ReactNode | ReactElement
  endIcon?: ReactNode | ReactElement
  icon?: ReactNode | ReactElement
  disabled?: boolean
  onClick?: () => void
  fullWidth?: boolean
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  color,
  startIcon,
  endIcon,
  icon,
  fullWidth = false,
  disabled,
  children,
  onClick,
}) => {
  return (
    <ButtonMUI
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      className={cn(
        s.wrapper,
        {
          [s.boxFocus]: color !== 'secondary',
        },
        {
          [s.sizeSmall]: size === 'small',
        },
        {
          [s.sizeDefault]: size === 'default',
        },
      )}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}>
      {children && (
        <Typography variant={size === 'small' ? 'h3' : 'h2'} component="p" fontWeight="600">
          {children}
        </Typography>
      )}
      {icon && icon}
    </ButtonMUI>
  )
}

export default Button
