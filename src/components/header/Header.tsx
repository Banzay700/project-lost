import { FC } from 'react'

import { Navbar } from 'UI'
import { useUserReducer } from 'hooks'
import { HeaderWrapper } from 'components/header/Header.styled'
import { Watch } from './watch'
import { LogoWrapper } from './logo-wrapper'
import { navData } from './header.util'

const Header: FC = () => {
  const { userState } = useUserReducer()

  return (
    <HeaderWrapper>
      <LogoWrapper {...userState} />
      <Navbar direction="row" data={navData} spacing={6.4} />
      <Watch dataUser={userState} />
    </HeaderWrapper>
  )
}

export default Header
