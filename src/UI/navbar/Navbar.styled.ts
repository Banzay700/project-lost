import { Stack, styled } from '@mui/material'

export const NavbarWrapper = styled(Stack)(({ theme }) => ({
  gap: '30px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    gap: '10px',
    order: 3,
    flexBasis: '100%',
    justifyContent: 'flex-start',
  },
}))
