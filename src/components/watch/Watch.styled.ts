import { Stack, styled } from '@mui/material'

export const WatchContainer = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.main,
  width: '182px',
  height: '36px',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '40px',
  position: 'relative',

  [theme.breakpoints.down(1024)]: { display: 'none' },
}))
