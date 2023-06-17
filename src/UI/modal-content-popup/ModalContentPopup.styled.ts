import { Icon } from 'assets'
import { Stack, styled, css } from '@mui/material'

const IconStyle = css`
  width: 35px;
  height: 35px;
`

export const IconWrapper = styled(Stack)`
  flex-direction: row;
  justify-content: space-around;
  padding: 60px 0;
  border-bottom: 1px solid #0000001f;
`

export const IconContainer = styled(Stack)`
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #ff5c00;
  }
`

export const IconCheck = styled(Icon.Check)`
  ${IconStyle}
`
export const IconCross = styled(Icon.Cross)`
  ${IconStyle}
`
