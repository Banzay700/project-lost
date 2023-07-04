import { FC } from 'react'

import { Snackbar, Typography } from '@mui/material'

const SnackbarForHR: FC = () => {
  const message = () => {
    return (
      <>
        <Typography variant="h3">Hello!</Typography>
        <Typography variant="h3">A few comments:</Typography>
        <Typography variant="h3">
          - It is better to start exploring the app from the waiter role
        </Typography>
        <Typography variant="h3">
          - The delivery service interface looks better on mobile
        </Typography>
        <Typography variant="h3">Password: 123 (for all roles)</Typography>
      </>
    )
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transitionDuration={{ enter: 2500 }}
      message={message()}
      open
    />
  )
}

export default SnackbarForHR
