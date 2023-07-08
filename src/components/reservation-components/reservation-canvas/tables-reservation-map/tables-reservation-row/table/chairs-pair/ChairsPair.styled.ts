import { Box, styled } from '@mui/material'

export const ChairsPairItem = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '30px',
  width: '14px',
  height: '50px',
  top: '50%',
  transform: 'translateY(-50%)',
  border: '1px solid',
  borderColor: theme.palette.border.default,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('lg')]: { width: '12px', height: '39px' },
}))
