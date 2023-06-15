import { FC, ReactNode } from 'react'
import { ListItem, Stack, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { CustomNavLink } from 'UI'
import s from './SidebarTabItem.module.scss'

interface SidebarTabItemProps {
  linkTo: string
  label: string
  icon?: ReactNode
}

const SidebarTabItem: FC<SidebarTabItemProps> = ({ label, icon, linkTo }) => {
  const { pathname } = useLocation()
  const lastPathname = pathname.split('/')

  return (
    <ListItem sx={{ height: 'fit-content', p: 0 }}>
      <CustomNavLink
        linkTo={linkTo}
        variant="tabs"
        registeredLinkTo={lastPathname[lastPathname.length - 1]}
        registeredPathname={pathname}>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '12px', position: 'relative' }}>
          {icon}
          <Typography variant="h2" component="p" fontWeight={600}>
            {label}
          </Typography>
        </Stack>
      </CustomNavLink>
    </ListItem>
  )
}

export default SidebarTabItem
