import { Stack, styled } from '@mui/material'

export const WaiterContentWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flex: 1,
  height: 'calc(100% - 76px)',
  [theme.breakpoints.down('sm')]: { height: 'calc(100% - 165px)' },
}))

export const OutletWrapper = styled(Stack)`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: auto;
`
