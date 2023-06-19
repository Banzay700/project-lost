import { FC } from 'react'
import { Typography } from '@mui/material'
import { ItemWrapper } from './PartySizeItem.styled'

interface PartySizeItemProps {
  number: number
  active: boolean
  onClick: () => void
}

const PartySizeItem: FC<PartySizeItemProps> = ({ number, active, onClick }) => {
  return (
    <ItemWrapper onClick={onClick} active={active}>
      <Typography fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {number}
      </Typography>
    </ItemWrapper>
  )
}

export default PartySizeItem
