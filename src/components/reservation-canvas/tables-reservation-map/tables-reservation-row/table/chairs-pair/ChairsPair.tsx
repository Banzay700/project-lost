import { FC } from 'react'
import { ChairsPairItem } from './ChairsPair.styled'

const ChairsPair: FC = () => {
  return (
    <>
      <ChairsPairItem sx={{ right: { lg: '-21px', xs: '-16px' } }} />
      <ChairsPairItem sx={{ left: { lg: '-21px', xs: '-16px' } }} />
    </>
  )
}

export default ChairsPair
