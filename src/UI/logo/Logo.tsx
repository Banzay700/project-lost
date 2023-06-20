import { FC } from 'react'
import { LogoImg } from 'assets'
import { LogoWrapper } from './Logo.styled'

interface LogoProps {
  link: string
}

const Logo: FC<LogoProps> = ({ link }) => {
  return (
    <LogoWrapper to={link}>
      <LogoImg style={{ marginRight: '8px' }} />
    </LogoWrapper>
  )
}

export default Logo
