import { FC } from 'react'
import { useFormikContext } from 'formik'

import { FadeIn } from 'utils'
import { OrderCreatorFormReturnType, ReservationInfoResponseType } from 'types'
import { InfoItem } from './info-item'

interface InfoBoxProps {
  data?: ReservationInfoResponseType
}

const InfoBox: FC<InfoBoxProps> = ({ data }) => {
  const { values } = useFormikContext<OrderCreatorFormReturnType>()
  const isHidden = values.orderType !== 'dineIn'

  return (
    <FadeIn styles={{ flex: '1 1 auto', padding: '20px' }}>
      {data && <InfoItem isHidden={isHidden} data={data} />}
    </FadeIn>
  )
}

export default InfoBox
