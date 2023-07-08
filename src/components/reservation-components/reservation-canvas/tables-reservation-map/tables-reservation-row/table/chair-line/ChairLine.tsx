import { FC } from 'react'

import { calculateSeatsQuantity } from './ChairLine.utils'
import { Chair, ChairLineWrapper, EmptyLine } from './ChairLine.styled'

interface ChairLineProps {
  specifiedSeatsQuantity: number
}

const ChairLine: FC<ChairLineProps> = ({ specifiedSeatsQuantity }) => {
  const seatsQuantity = calculateSeatsQuantity(specifiedSeatsQuantity)
  const chairItems = Array.from({ length: seatsQuantity }, (_, i) => <Chair key={i} />)

  return (
    <ChairLineWrapper>
      <EmptyLine />
      {chairItems}
      <EmptyLine />
    </ChairLineWrapper>
  )
}

export default ChairLine
