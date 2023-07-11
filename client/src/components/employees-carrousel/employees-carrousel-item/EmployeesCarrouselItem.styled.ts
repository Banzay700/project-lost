import { Stack, styled } from '@mui/material'
import { withProps } from 'utils'

type StackWrapperProps = {
  isActive?: boolean
}

type ImgProps = {
  src?: string
  alt: string
  isActive?: boolean
}

export const StackWrapper = styled(
  Stack,
  withProps('isActive'),
)<StackWrapperProps>(
  ({ isActive }) => `flex-direction: column;
cursor: pointer;
opacity: ${isActive ? 1 : 0.64} ;
align-items: center;`,
)

export const Img = styled(
  'img',
  withProps('isActive'),
)<ImgProps>(
  ({ isActive, theme }) => `
  border: 5px solid ${theme.palette.border.default};
  border-radius: 50%;
  width:  ${isActive ? '124px' : '100px'};
  height: ${isActive ? '124px' : '100px'};
  object-fit: cover;`,
)
