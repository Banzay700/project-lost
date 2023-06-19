import { Stack, styled } from '@mui/material'

export const HeaderAdminWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 24px',
  borderBottom: `1px solid ${theme.palette.border.default}`,
}))
