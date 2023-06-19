import { FC } from 'react'
import { Typography, Stack } from '@mui/material'
import { Input } from 'UI/input'

const GuestDetail: FC = () => {
  return (
    <Stack sx={{ gap: '12px', marginTop: '24px' }}>
      <Typography variant="h1" component="div" color="black">
        Guest detail
      </Typography>

      <Input type="text" placeholder="Full name" name="clientName" label="Full name" />

      <Stack flexDirection="row" gap="22px" justifyContent="space-between">
        <Input type="text" placeholder="Enter email address" name="email" label="Email" />

        <Input
          type="text"
          placeholder="Enter phone number"
          name="phoneNumber"
          label="Phone number"
        />
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
