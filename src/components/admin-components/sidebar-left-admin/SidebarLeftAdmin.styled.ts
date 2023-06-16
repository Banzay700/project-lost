import { Icon } from 'assets'
import styled from 'styled-components'
import { theme } from 'theme'

export const LogoutWrapper = styled(Icon.Logout)`
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:hover {
    color: ${theme.palette.primary.main};
  }
`
