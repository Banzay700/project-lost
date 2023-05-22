import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/material'

const MainPage: FC = () => {
  return (
    <Stack height="100vh">
      <Outlet />
    </Stack>
  )
}

export default MainPage
