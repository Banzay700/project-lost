import { Stack, Grid, styled } from '@mui/material'

export const ChartsContainer = styled(Grid)`
  position: relative;
`

export const ChartItem = styled(Stack)(({ theme }) => ({
  position: 'relative',
  padding: '10px',
  height: '100%',
  boxShadow: '0px 8px 16px 0px rgba(96, 97, 112, 0.16), 0px 2px 4px 0px rgba(40, 41, 61, 0.04)',
  borderRadius: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '344px',
  backgroundColor: theme.palette.background.default,
}))
