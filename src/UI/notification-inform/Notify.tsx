import { FC } from 'react'
import { Snackbar, Alert, Stack, Typography } from '@mui/material'
import { Icon } from 'assets'

interface NotifyProps {
  message: string
  type?: 'error' | 'success' | 'info'
  verticalPosition?: 'top' | 'bottom'
  horizontalPosition?: 'center' | 'left' | 'right'
  open: boolean
  handleClose: () => void
}

const Notify: FC<NotifyProps> = (props) => {
  const { message, open, type, verticalPosition, horizontalPosition, handleClose } = props

  const vertical = verticalPosition || 'top'
  const horizontal = horizontalPosition || 'center'

  return (
    <Snackbar
      open={open}
      autoHideDuration={2500}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert severity={type || 'error'} onClick={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default Notify
