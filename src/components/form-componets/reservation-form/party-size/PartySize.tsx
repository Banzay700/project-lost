import { Divider, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { PartySizeItem } from './party-size-item'

interface ReservationPartySizeProps {
  label: string
  seats: number
}

const PartySize: FC<ReservationPartySizeProps> = ({ label, seats }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClicked = (index: number) => {
    setActiveIndex(index)
    console.log(index)
  }

  const partySize = Array.from({ length: seats }, (_, i) => {
    const isLastElement = i !== seats - 1
    return (
      <>
        <PartySizeItem
          key={i}
          number={i + 1}
          active={activeIndex === i}
          onClick={() => handleItemClicked(i)}
        />
        {isLastElement && <Divider key={i} />}
      </>
    )
  })

  return (
    <Stack sx={{ gap: '12px' }}>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      <Stack sx={{ flexDirection: 'row', border: '1px solid #E4E4E4', borderRadius: '16px' }}>
        {partySize}
      </Stack>
    </Stack>
  )
}

export default PartySize
