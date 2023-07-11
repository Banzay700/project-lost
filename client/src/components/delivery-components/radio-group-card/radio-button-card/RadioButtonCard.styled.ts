import { FormControl, Radio, styled } from '@mui/material'
import { withProps } from 'utils/withProps'

export const RadioButtonCardWrapper = styled(
  FormControl,
  withProps('isChecked'),
)<{ isChecked: boolean }>(({ theme, isChecked }) => ({
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: `${isChecked ? theme.palette.primary.main : theme.palette.text.primary}`,
  background: `${isChecked ? theme.palette.primary.extraLight : 'transparent'}`,
  border: `1px solid currentColor`,
  padding: '14px',
  borderRadius: '16px',
  cursor: 'pointer',
}))

export const RadioButtonCardRadio = styled(Radio)`
  color: currentColor;
`
