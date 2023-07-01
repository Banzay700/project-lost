import { FC } from 'react'
import { LogoImg } from 'assets'
import { Typography } from '@mui/material'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
  routeLogoStyle?: string
  widthLogo?: string
  heightLogo?: string
}

const Logo: FC<LogoProps> = ({ link, routeLogoStyle, widthLogo, heightLogo }) => {
  return (
    <LogoWrapper to={link}>
      <LogoImg
        style={{ marginRight: '8px' }}
        width={widthLogo || '120px'}
        height={heightLogo || '35px'}
      />
      <Typography lineHeight={0.7}>{routeLogoStyle}</Typography>
    </LogoWrapper>
  )
}

export default Logo
