import { FC, PropsWithChildren } from 'react'

import { Navbar } from 'UI'
import { useUserReducer } from 'hooks'
import { Watch } from 'components'
import { LinkItemType } from 'types'
import { HeaderWrapper } from './Header.styled'
import { LogoWrapper } from './logo-wrapper'

interface HeaderProps extends PropsWithChildren {
  dataLink?: LinkItemType[]
  routeLogoStyle?: string
  withoutLink?: boolean
}

const Header: FC<HeaderProps> = ({ dataLink, withoutLink, routeLogoStyle, children }) => {
  const { userState } = useUserReducer()

  return (
    <HeaderWrapper>
      <LogoWrapper {...userState} routeLogoStyle={routeLogoStyle} />
      {children}
      {dataLink && !withoutLink && <Navbar direction="row" data={dataLink} />}
      <Watch dataUser={userState} />
    </HeaderWrapper>
  )
}

export default Header
