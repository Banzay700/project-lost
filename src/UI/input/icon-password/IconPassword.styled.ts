import { Box, styled } from '@mui/material'

export const IconPasswordWrapper = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  position: 'absolute',
  top: '11px',
  right: '9px',
  [theme.breakpoints.down('lg')]: { top: '9px' },
}))
