import { Button, Typography } from '@mui/material/'
import { FC, ReactNode } from 'react'
import { BtnLoginValue } from 'types/IEmployee'
import s from './BlurButton.module.scss'

interface BlurButtonProps {
  children: ReactNode
  value: BtnLoginValue
  getValue: (value: BtnLoginValue) => void
}

const BlurButton: FC<BlurButtonProps> = ({ children, value, getValue }) => {
  return (
    <Button className={s.button} onClick={() => getValue(value)}>
      <Typography variant="h1" component="span">
        {children}
      </Typography>
    </Button>
  )
}

export default BlurButton
