import { FC, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import { RadioButtonCardWrapper, RadioButtonCardRadio } from './RadioButtonCard.styled'

interface RadioButtonCardProps {
  value: string
  isChecked: string
  onChange: (value: string) => void
}

const RadioButtonCard: FC<RadioButtonCardProps> = ({ value, isChecked, onChange }) => {
  const checked = isChecked === value
  const handleChangeRadio = () => {
    onChange(value)
  }
  return (
    <RadioButtonCardWrapper onClick={handleChangeRadio} isChecked={checked}>
      <RadioButtonCardRadio checked={checked} onChange={handleChangeRadio} />
      <Stack>
        <Typography variant="subtitle1" component="p" color="text.primary">
          Order ID #256873
        </Typography>
        <Typography fontSize="16px" component="p" fontWeight="600">
          Chintya lin
        </Typography>
        <Typography variant="subtitle1" component="p" color="text.primary">
          Test 555, Alimps Campus, Binaker
        </Typography>
      </Stack>
    </RadioButtonCardWrapper>
  )
}

export default RadioButtonCard
