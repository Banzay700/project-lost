import { FC, useState, useEffect } from 'react'
import { Notify } from 'UI'

interface NotifyErrorProps {
  isSuccess?: boolean
  isError?: boolean
  error?: unknown
}

const NotifyError: FC<NotifyErrorProps> = (props) => {
  const { isError, error, isSuccess } = props

  const [msg, setMsg] = useState('')
  const [open, setOpenStatus] = useState(false)
  const [type, setType] = useState<'error' | 'success' | 'info'>('error')

  useEffect(() => {
    if (isError && typeof error === 'object') {
      const e = error as { data: string }
      setMsg(e.data)
      setOpenStatus(true)
    } else if (isError) {
      setMsg('Something went wrong')
      setOpenStatus(true)
    } else if (isSuccess) {
      setMsg('message was sent to user')
      setType('success')
      setOpenStatus(true)
    }
  }, [error, isError, isSuccess])

  const handleClose = () => {
    setOpenStatus(false)
  }

  return <Notify message={msg} open={open} type={type} handleClose={handleClose} />
}

export default NotifyError
