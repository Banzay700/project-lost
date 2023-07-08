import { styled, Stack } from '@mui/material'
import { FadeIn } from 'utils'

export const LabelContent = styled(FadeIn)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
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

export const TitleLineWrapper = styled(Stack)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
