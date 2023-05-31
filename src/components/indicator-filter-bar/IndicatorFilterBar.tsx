import { FC } from 'react'
import { Stack } from '@mui/material'
import { Indicator, FilterMenu } from 'UI'

import { FilterMenuItemType } from 'types'

interface OrderFilterBarProps {
  indicatorName: ['takeAway', 'dineIn'] | ['delivery', 'takeAway', 'dineIn']
  filterMenuItems: FilterMenuItemType[]
  onChange: (value: string[]) => void
}

const IndicatorFilterBar: FC<OrderFilterBarProps> = ({
  indicatorName,
  filterMenuItems,
  onChange,
}) => {
  return (
    <Stack
      sx={{
        p: '16px 24px',
        borderBottom: '1px solid #E4E4E4',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        gap: '24px',
      }}>
      <Stack direction="row" spacing="32px">
        {indicatorName.map((item) => (
          <Indicator key={item} type={item} />
        ))}
      </Stack>
      <Stack>
        <FilterMenu filterMenuItems={filterMenuItems} onChange={onChange} />
      </Stack>
    </Stack>
  )
}

export default IndicatorFilterBar
