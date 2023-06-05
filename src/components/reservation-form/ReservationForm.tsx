import { FC } from 'react'

import { PartySize } from './party-size'

const ReservationForm: FC = () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <PartySize label="Select party size" seats={8} />
    </div>
  )
}

export default ReservationForm
