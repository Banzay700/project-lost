import { Box, styled } from '@mui/material'
import { FadeIn } from 'utils'

export const DishesPageWrapper = styled(FadeIn)`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRight: '1px solid',
  borderColor: theme.palette.border.default,
}))
