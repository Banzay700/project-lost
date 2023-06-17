import { FC } from 'react'
import { LogoCocaImg, LogoCocaText } from 'assets'
import { Theme, useMediaQuery } from '@mui/material'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
  view: 'img' | 'text' | 'both'
}

const Logo: FC<LogoProps> = ({ link, view }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up(820))
  const viewImg = view === 'img' || view === 'both'
  const viewText = view === 'text' || view === 'both'

  return (
    <LogoWrapper to={link}>
      {viewImg && <LogoCocaImg style={{ marginRight: '8px' }} />}
      {viewText && isSmallScreen && <LogoCocaText />}
    </LogoWrapper>
  )
}

export default Logo
