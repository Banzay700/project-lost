import { FC, MouseEvent, useEffect, useState } from 'react'
import { Stack, Avatar, Box, Menu, Typography, Divider } from '@mui/material'
import { Button, MenuItem } from 'UI'
import { UserType } from 'types'
import { useLogoutMutation } from 'store/api'
import { Navigate } from 'react-router-dom'
import { stringAvatar, menuData, formatDateTime, menuDataAction } from './watch.utils'
import { WatchContainer } from './Watch.styled'

interface WatchProps {
  dataUser: UserType
}

const Watch: FC<WatchProps> = ({ dataUser }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [logout, { isSuccess }] = useLogoutMutation()
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

  if (isSuccess) {
    return <Navigate to="/login" />
  }

  return (
    <Stack spacing={3.2} direction="row" alignItems="center">
      <WatchContainer color="text.secondary">
        <Typography variant="h3" position="absolute">
          {formattedDate}
        </Typography>
      </WatchContainer>
      <Box>
        <Button
          variant="text"
          size="medium"
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
