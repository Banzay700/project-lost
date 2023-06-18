import { Stack, styled } from '@mui/material'

export const TableCardWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '13px 0',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: theme.palette.border.default,
  minWidth: '57px',
}))

export const TableCardIcon = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: -9,
  right: 0,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  padding: '5px',
  cursor: 'pointer',
  '&:hover': { backgroundColor: theme.palette.primary.light },
}))
