import { FC } from 'react'
import { LogoImg } from 'assets'
import { Typography } from '@mui/material'
import { useScreenTracking } from 'hooks'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
  routeLogoStyle?: string
}

const Logo: FC<LogoProps> = ({ link, routeLogoStyle }) => {
  const { isMobileScreen } = useScreenTracking()

  return (
    <LogoWrapper to={link}>
      <LogoImg
        style={{ marginRight: '8px' }}
        width={isMobileScreen ? '100px' : '120px'}
        height={isMobileScreen ? '25px' : '35px'}
      />
      <Typography lineHeight={isMobileScreen ? 0.7 : 1}>{routeLogoStyle}</Typography>
    </LogoWrapper>
  )
}

export default Logo
