import { FC } from 'react'
import { Navbar } from 'UI'
import { Watch } from './watch'
import { LogoWrapper } from './logo-wrapper'
import { mockUser, navData } from './header.util'
import s from './Header.module.scss'
import { useUserReducer } from 'hooks/useUserReducer.hook'

const Header: FC = () => {
  const { userState } = useUserReducer()
  return (
    <header className={s.header}>
      <LogoWrapper />
      <Navbar direction="row" data={navData} spacing={6.4} />
      <Watch dataUser={userState} />
    </header>
  )
}

export default Header
