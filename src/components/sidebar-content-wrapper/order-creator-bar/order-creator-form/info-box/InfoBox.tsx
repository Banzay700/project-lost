import { FC } from 'react'

import { useGetTableReservationForCurrentDayQuery } from 'store/api'
import { FadeIn } from 'utils'
import { InfoItem } from './info-item'

interface InfoBoxProps {
  tableNumber: string
}

const InfoBox: FC<InfoBoxProps> = ({ tableNumber }) => {
  const { data } = useGetTableReservationForCurrentDayQuery(tableNumber)

  return (
    <FadeIn styles={{ flex: '1 1 auto', padding: '20px' }}>
      {data && <InfoItem data={data} />}
    </FadeIn>
  )
}

export default InfoBox
