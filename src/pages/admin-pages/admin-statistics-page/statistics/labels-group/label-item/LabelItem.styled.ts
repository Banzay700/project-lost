import { styled, Stack } from '@mui/material'
import { FadeIn } from 'utils'

export const LabelContent = styled(FadeIn)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
  [theme.breakpoints.down(1145)]: { gap: '6px' },
}))

export const PercentageWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  borderTop: '1px solid',
  gap: '5px',
  padding: '12px 0 0',
  borderColor: theme.palette.border.default,
}))

export const TitleLineWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down(1145)]: { alignItems: 'flex-start' },
}))
