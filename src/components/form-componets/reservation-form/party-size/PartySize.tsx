import { Divider, Stack, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { PartySizeItem } from './party-size-item'
import { SetFormValues } from '../ReservationForm.utils'

interface ReservationPartySizeProps {
  label: string
  seats: number
  handleSetFormValues: (fieldName: string, value: SetFormValues) => void
}

const PartySize: FC<ReservationPartySizeProps> = (props) => {
  const { label, seats, handleSetFormValues } = props
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleItemClicked = (index: number) => {
    setActiveIndex(index)
    handleSetFormValues('partySize', index + 1)
  }

  const partySize = Array.from({ length: seats }, (_, i) => {
    const isLastElement = i !== seats - 1
    return (
      <div key={i}>
        <PartySizeItem
          key={`d${i}`}
          number={i + 1}
          active={activeIndex === i}
          onClick={() => handleItemClicked(i)}
        />
        {isLastElement && <Divider key={i} />}
      </div>
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
