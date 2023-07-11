import { Stack, styled } from '@mui/material'
import { FadeIn } from 'utils'

export const InfoListWrapper = styled(FadeIn)`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const DetailsList = styled('div')`
  overflow-y: auto;
  flex: 1;
`

export const DetailsListActionsWrapper = styled(Stack)`
  gap: 24px;
  padding: 18px 16px;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.palette.border.default};
`
