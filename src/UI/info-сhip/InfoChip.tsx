import { FC } from 'react'
import { spacesBetweenCapitalsLetters } from 'utils'
import { InfoChipWrapper } from './InfoChip.styled'

interface InfoTagProps {
  type?:
    | 'dineIn'
    | 'takeAway'
    | 'delivery'
    | 'opened'
    | 'closed'
    | 'admin'
    | 'waiter'
    | 'courier'
    | 'active'
    | 'inactive'
    | 'cancelled'
    | 'cancel'
    | 'done'
}

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  const label = spacesBetweenCapitalsLetters(type)
  return <InfoChipWrapper label={label} type={type} />
}

export default InfoChip
