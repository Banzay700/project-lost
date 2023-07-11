import { Stack, styled } from '@mui/material'

export const AdaptiveHeaderWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'calc(100% - 76px)',

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100% - 165px)',
  },
}))
export default AdaptiveHeaderWrapper
