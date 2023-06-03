import { FC } from 'react'
import { Box } from '@mui/material'

import { IndicatorsGroup, ReservationBottomBar } from 'components'
import { PageActionsBar } from 'UI'
import { FadeIn } from 'utils'

const ReservationPage: FC = () => {
  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <PageActionsBar>
        <IndicatorsGroup />
      </PageActionsBar>
      <Box sx={{ flex: 1, bgcolor: '#F8F9FD' }}>Tables canvas</Box>
      <ReservationBottomBar />
    </FadeIn>
  )
}

export default ReservationPage
