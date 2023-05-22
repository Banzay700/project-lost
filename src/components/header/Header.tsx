import { FC } from 'react'
import { DataMokUserType, LinkType } from 'types'
import { Navbar } from 'UI'
import { LogoWrapper } from './logo-wrapper'
import { Watch } from './watch'
import s from './Header.module.scss'

interface HeaderProps {
  className: 'header' | string
  data: LinkType[]
  spacing?: number
  direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse'
  dataMokUser: DataMokUserType
}

const Header: FC<HeaderProps> = ({ className, data, direction, spacing, dataMokUser }) => {
  return (
    <header className={s[className]}>
      <LogoWrapper />
      <Navbar direction={direction || 'row'} data={data} spacing={spacing || 6.4} />
      <Watch dataMokUser={dataMokUser} />
    </header>
  )
}

export default Header
