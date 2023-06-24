import { FC } from 'react'
import { Typography, Stack } from '@mui/material'
import { Input, PhoneNumberInput } from 'UI'
import { Error } from './GuestDetail.styled'

const GuestDetail: FC = () => {
  return (
    <Stack sx={{ gap: '10px' }}>
      <Typography variant="h3" component="p">
        Guest detail
      </Typography>
      <Input type="text" placeholder="Full name" name="clientName" label="Full name" />
      <Stack flexDirection="row" gap="22px" justifyContent="space-between">
        <Input type="text" placeholder="Enter email address" name="email" label="Email" />
        <Stack gap="3px">
          <PhoneNumberInput name="phoneNumber" />
          <Error name="phoneNumber" component="div" />
        </Stack>
      </Stack>
      <Input
        type="text"
        placeholder="Write reservation note here..."
        name="note"
        label="Visit note"
      />
    </Stack>
  )
}

export default GuestDetail
