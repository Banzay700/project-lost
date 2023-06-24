import { Card, ListItem, styled } from '@mui/material'

export const CardStyled = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  display: 'flex',
  gap: '12px',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
  borderRadius: 0,
  background: 'inherit',
  borderBottom: '1px solid',
  borderColor: theme.palette.border.default,
  position: 'relative',
  alignItems: 'center',
}))

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  width: '100%',
  padding: 0,
  ':hover': {
    transition: '0.3s ease-in-out',
    background: theme.palette.background.main,
  },
}))
