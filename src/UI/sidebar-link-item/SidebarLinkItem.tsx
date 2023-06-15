import { FC, PropsWithChildren } from 'react'
import { ListItem, Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import cn from 'classnames'
import { useLocation } from 'react-router-dom'
import { useGetSvgQuery } from 'store/api'
import { CustomNavLink } from 'UI'
import s from './SidebarLinkItem.module.scss'

interface SidebarLeftItemProps extends PropsWithChildren {
  label: string
  linkTo: string
  linkIconSVG?: string
  registeredLinkTo?: string
  className?: string
}
const SidebarLinkItem: FC<SidebarLeftItemProps> = ({
  label,
  linkTo,
  linkIconSVG,
  registeredLinkTo,
  children,
  className,
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
    <ListItem className={cn(s.item, className)}>
      <CustomNavLink
        linkTo={linkTo}
        className={s.link}
        isActiveClassName={s.activeLink}
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
    </ListItem>
  )
}

export default SidebarLinkItem
