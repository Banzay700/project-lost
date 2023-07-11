import { FC, SyntheticEvent, useEffect, useState } from 'react'
import { Alert, Snackbar as SnackbarMUI } from '@mui/material'

interface SnackbarProps {
  isError?: boolean
  isSuccess?: boolean
}

const Snackbar: FC<SnackbarProps> = ({ isError, isSuccess }) => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<'success' | 'error'>('success')
  const [messageState, setMessageState] = useState('This is a success!')

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (isSuccess) {
      setSeverity('success')
      setMessageState('This is a success!')
      setOpen(true)
    }
    if (isError) {
      setSeverity('error')
      setMessageState('This is an error')
      setOpen(true)
    }

    return () => {
      setSeverity('success')
    }
  }, [isSuccess, isError])

  return (
    <SnackbarMUI
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {messageState}
      </Alert>
    </SnackbarMUI>
  )
}

export default Snackbar
