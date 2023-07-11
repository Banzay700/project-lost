import { Box, FormControlLabel, Stack, styled } from '@mui/material'
import { withProps } from 'utils/withProps'

interface RadioProps {
  isChecked: boolean
}

export const RadioButtonWrapper = styled(Box)`
  position: relative;
  max-height: 56px;
`

export const RadioIconWrapper = styled(
  Stack,
  withProps('isChecked'),
)<RadioProps>(({ theme, isChecked }) => ({
  position: 'absolute',
  width: '30px',
  height: '30px',
  top: '12px',
  left: '19px',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'color 0.2s ease',
  color: isChecked ? theme.palette.primary.main : '',
}))

export const FormControlLabelWrapper = styled(
  FormControlLabel,
  withProps('isChecked'),
)<RadioProps>(({ theme, isChecked }) => ({
  width: '100%',
  marginLeft: '0',
  borderRadius: '16px',
  padding: '6px 14px 6px 57px',
  justifyContent: 'space-between',
  border: '1px solid',
  borderColor: isChecked ? theme.palette.primary.main : theme.palette.border.dark,
  color: isChecked ? theme.palette.primary.main : theme.palette.border.dark,
  transition: 'all 0.2s ease',
  backgroundColor: isChecked ? theme.palette.background.accent : theme.palette.background.default,
}))
