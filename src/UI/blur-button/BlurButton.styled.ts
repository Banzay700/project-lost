import { Button, styled } from '@mui/material/'

export const ButtonWrapper = styled(Button)(({ theme }) => ({
  background: 'rgba(67, 67, 67, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.24)',
  backdropFilter: 'blur(8px)',
  borderRadius: '160px',
  color: theme.palette.primary.contrastText,
  width: '124px',
  height: '60px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '25vw',
  },
}))
