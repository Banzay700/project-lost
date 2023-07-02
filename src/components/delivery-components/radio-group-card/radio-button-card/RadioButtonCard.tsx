import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { Icon } from 'assets/index'
import { InfoTag } from 'UI'
import { RadioButtonCardDeliveryItemType } from 'types'
import { RadioButtonCardWrapper, RadioButtonCardRadio } from './RadioButtonCard.styled'

const RadioButtonCard: FC<RadioButtonCardDeliveryItemType> = (props) => {
  const { id, isChecked, orderNumber, clientName, deliveryAddress, timeToReady, status, onChange } =
    props

  const checked = isChecked === id
  const handleChangeRadio = () => {
    onChange(id)
  }
  return (
    <RadioButtonCardWrapper onClick={handleChangeRadio} isChecked={checked}>
      <RadioButtonCardRadio checked={checked} onChange={handleChangeRadio} />
      <Stack direction="row" justifyContent="space-between" width="100%" sx={{ gap: '5px' }}>
        <Stack>
          <Typography variant="subtitle1" component="p" color="text.primary">
            Order ID #{orderNumber}
          </Typography>
          <Typography fontSize="16px" component="p" fontWeight="600">
            {clientName}
          </Typography>
          <Typography variant="subtitle1" component="p" color="text.primary">
            {deliveryAddress}
          </Typography>
        </Stack>
        <Stack justifyContent="space-between" minWidth="93px">
          <InfoTag
            label={timeToReady}
            size="small"
            icon={<Icon.Clock width="14px" height="14px" />}
          />
          {status && <InfoTag {...status} withBorder size="small" />}
        </Stack>
      </Stack>
    </RadioButtonCardWrapper>
  )
}

export default RadioButtonCard
