import { FC, useState } from 'react'
import { Button, Input } from 'UI'
import { IconAddTipAmount, IconEmail } from 'assets'
import { Stack } from '@mui/material'
import s from './OrderAdditionalInformation.module.scss'

interface OrderAdditionalInformationProps {}

const OrderAdditionalInformation: FC<OrderAdditionalInformationProps> = () => {
  const [tipState, setTipState] = useState(false)
  const [emailState, setEmailState] = useState(false)

  const handleToggleTipState = () => {
    setTipState((prevState) => !prevState)
  }
  const handleToggleEmailState = () => {
    setEmailState((prevState) => !prevState)
  }
  return (
    <Stack spacing={4}>
      <Stack direction="row" gap={4}>
        <Button
          variant="contained"
          size="default"
          color={tipState ? 'primary' : 'secondary'}
          fullWidth
          icon={<IconAddTipAmount />}
          className={s.button}
          fontWeight={400}
          variantText="h3"
          onClick={handleToggleTipState}>
          Add tip amount
        </Button>
        <Button
          variant="contained"
          size="default"
          color={emailState ? 'primary' : 'secondary'}
          fullWidth
          icon={<IconEmail />}
          className={s.button}
          fontWeight={400}
          variantText="h3"
          onClick={handleToggleEmailState}>
          Email
        </Button>
      </Stack>
      <Stack spacing={4}>
        {tipState && (
          <Input
            name="timAmount"
            placeholder="Add tip amount"
            label="Add tip amount"
            icon={<IconAddTipAmount />}
          />
        )}
        {emailState && (
          <Input name="email" placeholder="Email" label="Email" icon={<IconEmail />} />
        )}
      </Stack>
    </Stack>
  )
}

export default OrderAdditionalInformation
