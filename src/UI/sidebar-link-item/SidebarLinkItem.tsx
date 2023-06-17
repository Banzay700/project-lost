import { FC, PropsWithChildren } from 'react'
import { Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useGetSvgQuery } from 'store/api'
import { CustomNavLink } from 'UI'
import { FadeIn } from 'utils/index'
import { SidebarLinkItemWrapper } from './SidebarLinkItem.styled'

interface SidebarLeftItemProps extends PropsWithChildren {
  label: string
  linkTo: string
  linkIconSVG?: string
  registeredLinkTo?: string
}
const SidebarLinkItem: FC<SidebarLeftItemProps> = ({
  label,
  linkTo,
  linkIconSVG,
  registeredLinkTo,
  children,
}) => {
  const isThemeLgSize = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  let iconSVG
  if (linkIconSVG) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useGetSvgQuery(linkIconSVG as string)
    if (data) {
      iconSVG = data.svg
    }
  }
  const { pathname } = useLocation()

  return (
    <SidebarLinkItemWrapper>
      <FadeIn styles={{ height: '100%', width: '100%' }}>
        <CustomNavLink
          variant="sidebarTabs"
          linkTo={linkTo}
          registeredPathname={pathname}
          registeredLinkTo={registeredLinkTo}>
          {children}
          {iconSVG && <Stack dangerouslySetInnerHTML={{ __html: iconSVG }} />}
          {isThemeLgSize && (
            <Typography variant="subtitle1" component="p">
              {label}
            </Typography>
          )}
        </CustomNavLink>
      </FadeIn>
    </SidebarLinkItemWrapper>
  )
}

export default SidebarLinkItem
