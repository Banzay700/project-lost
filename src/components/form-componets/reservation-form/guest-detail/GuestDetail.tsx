import { FC } from 'react'
import { Typography, Stack } from '@mui/material'
import { Input } from 'UI/input'

const GuestDetail = () => {
  return (
    <Stack sx={{ gap: '12px', marginTop: '24px' }}>
      <Typography variant="h1" component="div" color="black">
        Guest detail
      </Typography>
      <Stack sx={{ gap: '12px' }}>
        <Typography variant="h3" component="p">
          Full name
        </Typography>
        <Input type="text" placeholder="Full name" name="name" label="Full name" />
      </Stack>
      <Stack flexDirection="row" gap="22px" justifyContent="space-between">
        <Stack sx={{ gap: '12px' }}>
          <Typography variant="h3" component="p">
            Email
          </Typography>
          <Input type="text" placeholder="Enter email address" name="email" label="Email" />
        </Stack>
        <Stack sx={{ gap: '12px' }}>
          <Typography variant="h3" component="p">
            Phone number
          </Typography>
          <Input
            type="text"
            placeholder="Enter phone number"
            name="phoneNumber"
            label="Phone number"
          />
        </Stack>
      </Stack>
      <Stack sx={{ gap: '12px' }}>
        <Typography variant="h3" component="p">
          Visit note
        </Typography>
        <Input
          type="text"
          placeholder="Write reservation note here..."
          name="note"
          label="Visit note"
        />
      </Stack>
    </Stack>
  )
}

export default GuestDetail
