import { styled, Stack } from '@mui/material'
import { FadeIn } from 'utils/index'

export const ListWrapper = styled(FadeIn)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ReservationInfoWrapper = styled(Stack)`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 33px 24px 24px;
`
