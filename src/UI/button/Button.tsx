import { FC, PropsWithChildren, ReactElement, ReactNode, MouseEvent } from 'react'
import { Typography, Stack } from '@mui/material'
import { ButtonWrapper } from './Button.styled'

interface ButtonProps extends PropsWithChildren {
  variant: 'contained' | 'outlined' | 'text'
  size: 'small' | 'medium'
  color?: 'secondary' | 'primary'
  startIcon?: ReactNode | ReactElement
  endIcon?: ReactNode | ReactElement
  icon?: ReactNode | ReactElement
  type?: 'submit' | 'reset' | 'button'
  variantText?: 'h1' | 'h2' | 'h3' | 'subtitle1' | 'subtitle2' | 'caption' | 'dashNumb'
  fontWeight?: 400 | 500 | 600 | 700
  disableRipple?: boolean
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  fullWidth?: boolean
  className?: string
  linkageToForm?: string
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
  disableRipple,
  disabled,
  className,
  children,
  onClick,
  linkageToForm,
}) => {
  const variantTextSize = variantText || (size === 'small' && 'h3') || 'h2'

  return (
    <ButtonWrapper
      size={size}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type || 'submit'}
      className={className}
      fullWidth={fullWidth}
      disableRipple={disableRipple}
      disabled={disabled}
      onClick={onClick}
      form={linkageToForm}>
      <Stack justifyContent="center" spacing="9px" alignItems="center">
        {icon && icon}
        {children && (
          <Typography variant={variantTextSize} component="p" fontWeight={fontWeight || 600} noWrap>
            {children}
          </Typography>
        )}
      </Stack>
    </ButtonWrapper>
  )
}

export default Button
