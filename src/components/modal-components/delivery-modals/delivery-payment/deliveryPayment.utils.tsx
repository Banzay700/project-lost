import { Stack, Typography } from '@mui/material'
import { Icon } from 'assets/index'

export const payment = [
  {
    method: 'Cash',
    component: (
      <Stack spacing={1.6} direction="row" alignItems="center" key={1}>
        <Icon.Cash />
        <Typography color="secondary" fontWeight={500}>
          Cash
        </Typography>
      </Stack>
    ),
  },
  {
    method: 'Visa',
    component: (
      <Stack spacing={1.6} direction="row" alignItems="center" key={2}>
        <Icon.Visa />
        <Typography color="secondary" fontWeight={500}>
          Visa
        </Typography>
      </Stack>
    ),
  },
  {
    method: 'MasterCard',
    component: (
      <Stack spacing={1.6} direction="row" alignItems="center" key={3}>
        <Icon.MasterCard />
        <Typography color="secondary" fontWeight={500}>
          MasterCard
        </Typography>
      </Stack>
    ),
  },
]
