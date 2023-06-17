import { TextField, styled, css } from '@mui/material'
import { withProps } from 'utils/withProps'

interface InputWrapperProps {
  outlined?: boolean
  icon?: boolean
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
