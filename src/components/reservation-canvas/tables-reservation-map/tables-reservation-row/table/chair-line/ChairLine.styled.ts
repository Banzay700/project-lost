import { styled } from '@mui/material'

export const ChairLineWrapper = styled('div')(({ theme }) => ({
  padding: '6px',
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: { gap: '8px' },
  [theme.breakpoints.down('md')]: { gap: '6px' },
}))

export const Chair = styled('div')(({ theme }) => ({
  borderRadius: '30px',
  minWidth: '50px',
  minHeight: '14px',
  border: '1px solid',
  borderColor: theme.palette.border.default,
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('lg')]: { minWidth: '39px', minHeight: '12px' },
}))

export const EmptyLine = styled('div')(({ theme }) => ({
  width: '5px',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('lg')]: { width: '5px' },
}))
