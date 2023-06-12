import { Stack } from '@mui/material'
import React from 'react'
import { AppRoutes } from 'routes'
import { ReservationForm } from 'components/form-componets/reservation-form'

const App = () => {
  return (
    // <ReservationForm />
    <Stack height="100vh">
      <AppRoutes />
    </Stack>
  )
}
export default App
