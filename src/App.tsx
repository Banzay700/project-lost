import { Stack } from '@mui/material'
import React from 'react'
import { AppRoutes } from 'routes'
import { ReservationForm } from 'components/reservation-form'
const App = () => {
  return <Stack height="100vh">{/* <AppRoutes /> */ <ReservationForm />}</Stack>
}
export default App
