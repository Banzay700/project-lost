import { Button, Typography } from '@mui/material/'
import { FC, PropsWithChildren } from 'react'
import { ButtonLoginReturnType } from 'types'
import s from './BlurButton.module.scss'

interface BlurButtonProps extends PropsWithChildren {
  value: ButtonLoginReturnType
  getValue: (value: ButtonLoginReturnType) => void
}

const BlurButton: FC<BlurButtonProps> = ({ value, getValue, children }) => {
  return (
    <Button className={s.button} onClick={() => getValue(value)}>
      <Typography variant="h1" component="span">
        {children}
      </Typography>
    </Button>
  )
}

export default BlurButton
