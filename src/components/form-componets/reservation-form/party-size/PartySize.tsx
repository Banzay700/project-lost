import { Stack, Typography } from '@mui/material'
import { FC, useState, useEffect } from 'react'
import { useField, useFormikContext, Field } from 'formik'
import { PartySizeItem } from './party-size-item'

interface ReservationPartySizeProps {
  label: string
  name: string
  seats: number
}

const PartySize: FC<ReservationPartySizeProps> = (props) => {
  const { label, seats, name } = props
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [, , helpers] = useField(name)

  const handleItemClicked = (index: number) => {
    setActiveIndex(index)
    helpers.setValue(index + 1, true)
  }

  const partySize = Array.from({ length: seats }, (_, i) => {
    return (
      <div key={i}>
        <PartySizeItem
          key={`d${i}`}
          number={i + 1}
          active={activeIndex === i}
          onClick={() => handleItemClicked(i)}
        />
      </div>
    )
  })

  return (
    <Field name={name}>
      {() => (
        <Stack sx={{ gap: '12px' }}>
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
            }}>
            {partySize}
          </Stack>
        </Stack>
      )}
    </Field>
  )
}

export default PartySize
