import { FC, useState } from 'react'

import { IndicatorsGroup, ReservationBottomBar, ReservationCanvas } from 'components'
import { Drawer } from 'components/drawer'
import { PageActionsBar } from 'UI'
import { useActiveOrderStatus } from 'hooks'
import { FadeIn } from 'utils'

const ReservationPage: FC = () => {
  useActiveOrderStatus('none')
  const [state, setState] = useState(false)

  const toggleDrawer = () => setState((prev) => !prev)

  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <PageActionsBar>
        <IndicatorsGroup />
      </PageActionsBar>
      <ReservationCanvas />
      <ReservationBottomBar toggleDrawer={toggleDrawer} />
      <Drawer state={state} toggleDrawer={toggleDrawer} />
    </FadeIn>
  )
}

export default ReservationPage
