import { Stack, styled } from '@mui/material'

export const PaginationWrapper = styled(Stack)(({ theme }) => ({
  height: 'fit-content',
  padding: '20px',
  flex: 0,

  [theme.breakpoints.down('md')]: { padding: '10px' },
  [theme.breakpoints.down('sm')]: { padding: '5px' },
}))
