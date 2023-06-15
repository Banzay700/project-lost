import styled, { css } from 'styled-components'
import { Chip } from '@mui/material'

interface InfoChipWrapperProps {
  type?:
    | 'dineIn'
    | 'takeAway'
    | 'delivery'
    | 'opened'
    | 'closed'
    | 'admin'
    | 'waiter'
    | 'courier'
    | 'active'
    | 'inactive'
    | 'cancelled'
    | 'done'
}

const BlueStyle = css`
  background: #e5edfe;
  color: #3071ff;
`

const OrangeStyle = css`
  background: #fff5ee;
  color: #ff5c00;
`

const YellowStyle = css`
  background: rgba(240, 180, 51, 0.16);
  color: #f0b433;
`

const GreenStyle = css`
  background: #eeffee;
  color: #35c335;
`

const RedStyle = css`
  background: rgba(255, 228, 228, 0.75);
  color: red;
`

const defaultStyle = css`
  background: #f1f1f1;
  color: #969696;
`

export const InfoChipWrapper = styled(Chip)<InfoChipWrapperProps>(({ type }) => {
  if (type === 'waiter' || type === 'takeAway') return BlueStyle

  if (type === 'dineIn' || type === 'closed' || type === 'done' || type === 'admin')
    return OrangeStyle

  if (type === 'delivery' || type === 'courier') return YellowStyle

  if (type === 'opened' || type === 'active') return GreenStyle

  if (type === 'cancelled') return RedStyle

  return defaultStyle
})
