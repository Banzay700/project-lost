import { FC } from 'react'

import { Navbar } from 'UI'
import { useUserReducer } from 'hooks'
import { Watch } from 'components'
import { LinkItemType } from 'types'
import { HeaderWrapper } from './Header.styled'
import { LogoWrapper } from './logo-wrapper'

interface HeaderProps {
  dataLink?: LinkItemType[]
  route?: string
}

const Header: FC<HeaderProps> = ({ dataLink, route }) => {
  const { userState } = useUserReducer()

  return (
    <HeaderWrapper>
      <LogoWrapper {...userState} route={route} />
      {dataLink && <Navbar direction="row" data={dataLink} />}
      <Watch dataUser={userState} />
    </HeaderWrapper>
  )
}

export default Header
