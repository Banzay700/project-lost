import { FC, useState, useEffect } from 'react'
import { Notify } from 'UI'

interface NotifyErrorProps {
  isError: boolean
  error?: unknown
}

const NotifyError: FC<NotifyErrorProps> = (props) => {
  const { isError, error } = props

  const [errorMsg, setError] = useState('')
  const [open, setOpenErrorMsg] = useState(false)

  useEffect(() => {
    if (isError && typeof error === 'object') {
      const e = error as { data: string }
      setError(e.data)
      setOpenErrorMsg(true)
    } else if (isError) {
      setError('Something went wrong')
      setOpenErrorMsg(true)
    }
  }, [error, isError])

  const handleClose = () => {
    setOpenErrorMsg(false)
  }

  return <Notify message={errorMsg} open={open} handleClose={handleClose} />
}

export default NotifyError
