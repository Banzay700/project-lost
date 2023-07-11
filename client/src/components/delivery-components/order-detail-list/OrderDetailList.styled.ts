import { Stack, styled, Typography } from '@mui/material'

export const OrderDetailListWrapper = styled(Stack)(({ theme }) => ({
  padding: '0 20px',
  [theme.breakpoints.up('sm')]: { padding: 0 },
}))

export const OrderDetailListTitle = styled(Typography)(({ theme }) => ({
  margin: '0 20px',
  pb: '5px',
  borderBottom: `1px solid ${theme.palette.border.default}`,

  [theme.breakpoints.up('sm')]: { display: 'none' },
}))
