import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { Button } from 'UI/index'
import { Icon } from 'assets'

interface OrderButtonsGroupProps {
  setTipStatus: () => void
  setEmailStatus: () => void
}

const OrderButtonsGroup: FC<OrderButtonsGroupProps> = ({ setTipStatus, setEmailStatus }) => {
  const [tipActive, setTipActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  const handleToggleTipStatus = () => {
    setTipStatus()
    setTipActive((prevState) => !prevState)
  }
  const handleToggleEmailStatus = () => {
    setEmailStatus()
    setEmailActive((prevState) => !prevState)
  }
  return (
    <Stack direction="row" gap={4} sx={{ maxHeight: '86px' }}>
      <Button
        variant="contained"
        size="medium"
        color={tipActive ? 'primary' : 'secondary'}
        fullWidth
        icon={<Icon.Tip />}
        fontWeight={400}
        variantText="h3"
        type="button"
        onClick={handleToggleTipStatus}>
        Add tip
      </Button>
      <Button
        variant="contained"
        size="medium"
        color={emailActive ? 'primary' : 'secondary'}
        fullWidth
        icon={<Icon.Email />}
        fontWeight={400}
        variantText="h3"
        type="button"
        onClick={handleToggleEmailStatus}>
        Email
      </Button>
    </Stack>
  )
}

export default OrderButtonsGroup
