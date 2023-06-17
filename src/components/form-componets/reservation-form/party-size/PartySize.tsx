import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import { PartySizeItem } from './party-size-item'

interface ReservationPartySizeProps {
  label: string
  name: string
  seats: number
  maxSeats: number
}

const PartySize: FC<ReservationPartySizeProps> = (props) => {
  const { label, maxSeats, name, seats } = props
  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)

  const handleItemClicked = (index: number) => {
    if (!!maxSeats && index <= maxSeats) {
      setFieldValue(name, index)
    } else if (!maxSeats) {
      setFieldValue(name, index)
    }
  }

  const isActive = (number: number) => {
    if (field.value !== number) {
      return false
    }
    if (!!maxSeats && number <= maxSeats && field.value === number) {
      return true
    }
    if (!maxSeats && field.value === number) {
      return true
    }
    return false
  }

  const partySize = Array.from({ length: seats }, (_, i) => {
    const number = seats >= maxSeats ? i + 1 : i + (maxSeats - seats) + 1
    return (
      <div key={number}>
        <PartySizeItem
          key={number}
          number={number}
          active={isActive(number)}
          onClick={() => handleItemClicked(number)}
        />
      </div>
    )
  })

  return (
    <Stack {...field} sx={{ gap: '12px' }}>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      <Stack
        sx={{
          border: '1px solid #E4E4E4',
          borderRadius: '16px',
          flexDirection: 'row',
          alignSelf: 'center',
          maxWidth: '98%',
          flexWrap: 'wrap',
          overflow: 'hidden',
        }}>
        {partySize}
      </Stack>
    </Stack>
  )
}

export default PartySize
