import { FC } from 'react'
import { LogoImg } from 'assets'
import { Typography } from '@mui/material'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
  routeLogoStyle?: string
}

const Logo: FC<LogoProps> = ({ link, routeLogoStyle }) => {
  return (
    <LogoWrapper to={link}>
      <LogoImg style={{ marginRight: '8px' }} />
      <Typography>{routeLogoStyle}</Typography>
    </LogoWrapper>
  )
}

export default Logo
