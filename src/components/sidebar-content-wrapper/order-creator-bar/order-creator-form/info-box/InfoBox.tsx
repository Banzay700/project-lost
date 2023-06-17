import { FC } from 'react'

import { FadeIn } from 'utils'
import { ReservationInfoResponseType } from 'types'
import { InfoItem } from './info-item'

interface InfoBoxProps {
  data?: ReservationInfoResponseType
}

const InfoBox: FC<InfoBoxProps> = ({ data }) => {
  return (
    <FadeIn styles={{ flex: '1 1 auto', padding: '20px' }}>
      {data && <InfoItem data={data} />}
    </FadeIn>
  )
}

export default InfoBox
