import { FC } from 'react'
import { Typography } from '@mui/material'
import { ItemWrapper } from './PartySizeItem.styled'

interface PartySizeItemProps {
  value: number
  maxSeats: number
  isActiveValue: number
  onClick: (value: number) => void
}

const PartySizeItem: FC<PartySizeItemProps> = ({ value, maxSeats, isActiveValue, onClick }) => {
  const handleClick = () => {
    onClick(value)
  }

  const isDisabled = value < maxSeats + 1

  const handleIsDisabled = isDisabled ? handleClick : () => {}

  return (
    <ItemWrapper
      onClick={handleIsDisabled}
      active={isActiveValue === value}
      isDisabled={!isDisabled}>
      <Typography
        fontWeight={600}
        color={isDisabled ? (isActiveValue === value ? 'primary' : 'secondary') : 'text.gray'}>
        {value}
      </Typography>
    </ItemWrapper>
  )
}

export default PartySizeItem
