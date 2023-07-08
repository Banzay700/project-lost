import { FC, useState } from 'react'
import { SwipeableDrawer } from '@mui/material'
import {
  IndicatorsGroup,
  ReservationBottomBar,
  ReservationCanvas,
  ReservationInfoList,
  ReservationForm,
} from 'components'
import { PageActionsBar } from 'UI'
import { useActiveOrderStatus } from 'hooks'

import { FadeIn } from 'utils'
import { indicatorReservationItems } from './reservationPage.utils'

const ReservationPage: FC = () => {
  useActiveOrderStatus('none')
  const [drawerState, setDrawerState] = useState(false)
  const [isShowForm, setShowForm] = useState(false)

  const toggleDrawer = () => setDrawerState((prev) => !prev)
  const handleShowForm = () => {
    toggleDrawer()
    setShowForm(!isShowForm)
  }

  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={indicatorReservationItems} />
      </PageActionsBar>
      <ReservationCanvas />
      <ReservationBottomBar toggleDrawer={toggleDrawer} handleShowForm={handleShowForm} />
      <SwipeableDrawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}>
        {isShowForm ? <ReservationForm handleShowForm={handleShowForm} /> : <ReservationInfoList />}
      </SwipeableDrawer>
    </FadeIn>
  )
}

export default ReservationPage
