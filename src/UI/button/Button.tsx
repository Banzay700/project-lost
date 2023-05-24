import ButtonMUI from '@mui/material/Button'
import { FC, PropsWithChildren, ReactElement, ReactNode, MouseEvent } from 'react'
import { Typography, Stack } from '@mui/material'
import cn from 'classnames'
import s from './Button.module.scss'

interface ButtonProps extends PropsWithChildren {
  variant: 'contained' | 'outlined' | 'text'
  size: 'small' | 'default'
  color?: 'secondary' | 'primary'
  startIcon?: ReactNode | ReactElement
  endIcon?: ReactNode | ReactElement
  icon?: ReactNode | ReactElement
  type?: 'submit' | 'reset' | 'button'
  variantText?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  fontWeight?: 400 | 500 | 600 | 700
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  fullWidth?: boolean
  className?: string
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  color,
  startIcon,
  endIcon,
  icon,
  type,
  variantText,
  fontWeight,
  fullWidth = false,
  disabled,
  className,
  children,
  onClick,
}) => {
  const variantTextSize = variantText || (size === 'small' && 'h3') || 'h2'

  return (
    <ButtonMUI
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type || 'submit'}
      className={cn(
        className,
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
      <Stack justifyContent="center" spacing="9px" alignItems="center">
        {icon && icon}
        {children && (
          <Typography variant={variantTextSize} component="p" fontWeight={fontWeight || 600} noWrap>
            {children}
          </Typography>
        )}
      </Stack>
    </ButtonMUI>
  )
}

export default Button
