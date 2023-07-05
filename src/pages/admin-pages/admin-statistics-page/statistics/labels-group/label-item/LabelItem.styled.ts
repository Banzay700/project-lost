import { styled, Stack, Box } from '@mui/material'

export const LabelWrapper = styled(Stack)(({ theme }) => ({
  position: 'relative',
  padding: '16px 20px 13px',
  alignItems: 'flex-start',
  overflow: 'hidden',
  width: '100%',
  borderRadius: '12px',
  gap: '10px',
  backgroundColor: theme.palette.background.default,
  boxShadow: '0px 8px 16px 0px rgba(96, 97, 112, 0.16), 0px 2px 4px 0px rgba(40, 41, 61, 0.04)',
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

export const DecorLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '5px',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.primary.light,
}))

export const TitleLineWrapper = styled(Stack)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
