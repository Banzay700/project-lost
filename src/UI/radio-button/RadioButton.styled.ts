import { Box, css, FormControlLabel, Stack, styled } from '@mui/material'
import { theme } from 'theme'

interface RadioStyledProps {
  $isChecked: boolean
}

export const RadioButtonWrapper = styled(Box)`
  position: relative;
  max-height: 56px;
`

const isCheckedStyle = css`
  color: ${theme.palette.primary.main};
  transition: color 0.2s ease;
`

export const RadioIconWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$isChecked',
})<RadioStyledProps>`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 12px;
  left: 19px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ $isChecked }) => $isChecked && isCheckedStyle}
`

export const FormControlLabelWrapper = styled(FormControlLabel, {
  shouldForwardProp: (prop) => prop !== '$isChecked',
})<RadioStyledProps>(({ $isChecked }) => ({
  width: '100%',
  marginLeft: '0',
  borderRadius: '16px',
  padding: '6px 14px 6px 57px',
  justifyContent: 'space-between',
  border: '1px solid',
  borderColor: $isChecked ? theme.palette.primary.main : '#C2C2C2',
  color: $isChecked ? theme.palette.primary.main : '#C2C2C2',
  transition: 'all 0.2s ease',
  backgroundColor: $isChecked ? '#FFF8F5' : '#fff',
}))
