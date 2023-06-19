import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC, useRef, useState } from 'react'
import { useField, useFormikContext } from 'formik'
import { PartySizeItem } from './party-size-item'
import {
  PartySizeButtonScroll,
  PartySizeButtonScrollWrapper,
  PartySizeWrapper,
} from './PartySize.styled'
import { partySizeArray } from './partySize.utils'

interface ReservationPartySizeProps {
  label: string
  name: string
  maxSeats: number
}

const PartySize: FC<ReservationPartySizeProps> = ({ label, name, maxSeats }) => {
  const { setFieldValue } = useFormikContext()
  const { breakpoints } = useTheme()
  const isScreenLarge = useMediaQuery(breakpoints.down('xl'))
  const [field] = useField(name)
  const [isSelected, setIsSelected] = useState<number>(0)

  const handleClickItem = (value: number) => {
    setIsSelected(value)
    setFieldValue(name, value)
  }

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollStep = 100

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= scrollStep
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += scrollStep
  }

  const partySize = partySizeArray(maxSeats)

  return (
    <Stack {...field} sx={{ gap: '12px', width: '100%' }}>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      <Stack direction="row" width="100%">
        {isScreenLarge && (
          <PartySizeButtonScrollWrapper>
            <PartySizeButtonScroll onClick={handleScrollLeft} />
          </PartySizeButtonScrollWrapper>
        )}
        <PartySizeWrapper ref={scrollContainerRef}>
          {partySize.map((number) => (
            <PartySizeItem
              maxSeats={maxSeats}
              key={number}
              value={number}
              isActiveValue={isSelected}
              onClick={handleClickItem}
            />
          ))}
        </PartySizeWrapper>
        {isScreenLarge && (
          <PartySizeButtonScrollWrapper>
            <PartySizeButtonScroll transformRight onClick={handleScrollRight} />
          </PartySizeButtonScrollWrapper>
        )}
      </Stack>
    </Stack>
  )
}

export default PartySize
