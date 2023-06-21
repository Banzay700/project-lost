import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC, useEffect, useRef, useState } from 'react'
import { useField, useFormikContext } from 'formik'
import { PartySizeItem } from './party-size-item'
import {
  PartySizeButtonScroll,
  PartySizeButtonScrollWrapper,
  PartySizeWrapper,
} from './PartySize.styled'
import { partySizeArray, SCROLL_STEP } from './partySize.utils'

interface ReservationPartySizeProps {
  label: string
  name: string
  maxSeats: number
}

const PartySize: FC<ReservationPartySizeProps> = ({ label, name, maxSeats }) => {
  const [isSelected, setIsSelected] = useState<number>(0)
  const { setFieldValue, isSubmitting } = useFormikContext()
  const [field] = useField(name)
  const { breakpoints } = useTheme()
  const isScreenLarge = useMediaQuery(breakpoints.down('xl'))

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const partySize = partySizeArray(maxSeats)

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= SCROLL_STEP
  }

  const handleScrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += SCROLL_STEP
  }

  const handleClickItem = (value: number) => {
    setIsSelected(value)
    setFieldValue(name, value)
  }

  useEffect(() => {
    if (isSubmitting) {
      setIsSelected(0)
    }
  }, [isSubmitting, name, setIsSelected])

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
