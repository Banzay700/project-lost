import { FC, PropsWithChildren } from 'react'
import { ListItem, Stack, Theme, Typography, useMediaQuery } from '@mui/material'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { useGetSvgQuery } from 'store/api'
import s from './SidebarLinkItem.module.scss'

interface SidebarLeftItemProps extends PropsWithChildren {
  label: string
  linkTo: string
  linkIconSVG?: string
  className?: string
}
const SidebarLinkItem: FC<SidebarLeftItemProps> = ({
  label,
  linkTo,
  linkIconSVG,
  className,
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

  return (
    <ListItem className={cn(s.item, className)}>
      <NavLink
        to={linkTo}
        className={({ isActive }) => (isActive ? cn(s.link, s.activeLink) : s.link)}>
        {children}
        {iconSVG && <Stack dangerouslySetInnerHTML={{ __html: iconSVG }} />}
        {isThemeLgSize && (
          <Typography variant="subtitle1" component="p">
            {label}
          </Typography>
        )}
      </NavLink>
    </ListItem>
  )
}

export default SidebarLinkItem
