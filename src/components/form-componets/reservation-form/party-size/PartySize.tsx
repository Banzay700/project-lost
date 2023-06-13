import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import { PartySizeItem } from './party-size-item'

interface ReservationPartySizeProps {
  label: string
  name: string
  seats: number
}

const PartySize: FC<ReservationPartySizeProps> = (props) => {
  const { label, seats, name } = props
  const { setFieldValue } = useFormikContext()
  const [field] = useField(name)

  const handleItemClicked = (index: number) => {
    setFieldValue(name, index)
  }

  const partySize = Array.from({ length: seats }, (_, i) => {
    const number = i + 1
    return (
      <div key={number}>
        <PartySizeItem
          key={number}
          number={number}
          active={field.value === number}
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
          maxWidth: 'fit-content',
          overflow: 'hidden',
        }}>
        {partySize}
      </Stack>
    </Stack>
  )
}

export default PartySize
