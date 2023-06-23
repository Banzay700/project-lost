import { Stack, styled } from '@mui/material'

export const PageActionsBar = styled(
  Stack,
  {},
)(({ theme }) => ({
  minHeight: '71px',
  padding: '16px 24px',
  borderBottom: `1px solid ${theme.palette.border.default}`,
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '24px',

  [theme.breakpoints.down(1024)]: {
    minHeight: 'fit-content',
    flexDirection: 'column',
  },

  [theme.breakpoints.down('sm')]: {
    border: 'none',
    alignItems: 'center',
  },
}))

export default PageActionsBar
