import { FC } from 'react'

import { IndicatorsGroup, ReservationBottomBar, ReservationCanvas } from 'components'
import { PageActionsBar } from 'UI'
import { FadeIn } from 'utils'

import { useActiveOrderStatus } from 'hooks/useActiveOrderStatus.hook'
import { Drawer } from 'components/drawer'

const ReservationPage: FC = () => {
  useActiveOrderStatus('none')

  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <PageActionsBar>
        <IndicatorsGroup />
      </PageActionsBar>
      <ReservationCanvas />
      <ReservationBottomBar />
      <Drawer />
    </FadeIn>
  )
}

export default ReservationPage
