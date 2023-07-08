import { Stack, styled } from '@mui/material'

const StatisticLabelWrapper = styled(Stack)(({ theme }) => ({
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
export default StatisticLabelWrapper
