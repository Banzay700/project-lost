import { FC, MouseEvent, useEffect, useState } from 'react'
import { Stack, Avatar, Box, Menu, Typography, Divider } from '@mui/material'
import { Button, MenuItem } from 'UI'
import { UserType } from 'types'
import { useLogoutMutation } from 'store/api'
import { stringAvatar, menuData, formatDateTime, menuDataAction } from './watch.utils'
import s from './Watch.module.scss'

interface WatchProps {
  dataUser: UserType
}

const Watch: FC<WatchProps> = ({ dataUser }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [logout] = useLogoutMutation()
  const open = Boolean(anchorEl)

  const { userImage, firstName, secondName } = dataUser

  const avatarName = !!firstName &&
    !!secondName && { ...stringAvatar(`${firstName} ${secondName}`) }

  const handleClickAvatar = (e: MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)

  const handleCloseAvatar = () => setAnchorEl(null)

  const handleLogout = () => {
    handleCloseAvatar()
    logout()
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formattedDate = formatDateTime(currentDateTime)

  return (
    <Stack spacing={3.2} direction="row" alignItems="center">
      <Box className={s.time} color="text.secondary">
        <Typography variant="h3" position="absolute">
          {formattedDate}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="text"
          size="default"
          color="secondary"
          onClick={handleClickAvatar}
          icon={<Avatar src={userImage || ''} {...avatarName} />}
        />
        <Menu anchorEl={anchorEl} open={open} onClose={handleCloseAvatar}>
          {menuData.map((item) => (
            <MenuItem data={item} key={item.title} onClose={handleCloseAvatar} />
          ))}
          <Divider />
          {menuDataAction.map((item) => (
            <MenuItem data={item} key={item.title} onClose={handleLogout} />
          ))}
        </Menu>
      </Box>
    </Stack>
  )
}

export default Watch
