import { Typography } from '@mui/material/'
import { FC, PropsWithChildren } from 'react'
import { ButtonLoginReturnType } from 'types'
import { ButtonWrapper } from './BlurButton.styled'

interface BlurButtonProps extends PropsWithChildren {
  value: ButtonLoginReturnType
  getValue: (value: ButtonLoginReturnType) => void
}

const BlurButton: FC<BlurButtonProps> = ({ value, getValue, children }) => {
  return (
    <ButtonWrapper onClick={() => getValue(value)}>
      <Typography variant="h1" component="span">
        {children}
      </Typography>
    </ButtonWrapper>
  )
}

export default BlurButton
