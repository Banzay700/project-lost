import { TextField, styled, css } from '@mui/material'
import { withProps, FadeIn } from 'utils'

interface InputWrapperProps {
  outlined?: boolean
  icon?: boolean
}

interface InputContainerProps {
  rows?: number
}

const StyleWithIcon = css`
  input {
    padding: 12px 16px 12px 0;
  }
`
const StyleOutlined = css`
  input {
    text-align: center;
  }
`
const StyleDefault = css`
  input {
    text-align: start;
  }
`

export const InputWrapper = styled(
  TextField,
  withProps('outlined', 'icon'),
)<InputWrapperProps>(({ outlined, icon }) =>
  outlined ? StyleOutlined : icon ? StyleWithIcon : StyleDefault,
)

export const InputContainer = styled(
  FadeIn,
  withProps('rows'),
)<InputContainerProps>(({ theme, rows }) => ({
  position: 'relative',
  width: '100%',
  height: rows ? `${31 * rows}px` : '53px',
  [theme.breakpoints.down('lg')]: rows ? `${31 * rows}px` : '53px',
}))

export const ErrorMessage = styled('div')`
  position: absolute;
  bottom: -9px;
  left: 12px;
  font-size: 11px;
  color: ${({ theme }) => theme.palette.primary.darkRed};
`
