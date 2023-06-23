import { FC } from 'react'
import { LogoImg } from 'assets'
import { Typography } from '@mui/material'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
  route?: string
}

const Logo: FC<LogoProps> = ({ link, route }) => {
  return (
    <LogoWrapper to={link}>
      <LogoImg style={{ marginRight: '8px' }} />
      <Typography>{route}</Typography>
    </LogoWrapper>
  )
}

export default Logo
