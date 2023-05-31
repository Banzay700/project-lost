import { FC } from 'react'
import { Stack } from '@mui/material'
import { Indicator, FilterMenu } from 'UI'

import { FilterMenuItemType } from 'types'

interface OrderFilterBarProps {
  indicatorName: ['dineIn', 'takeAway'] | ['delivery', 'dineIn', 'takeAway']
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange: (value: string[]) => void
}

const IndicatorFilterBar: FC<OrderFilterBarProps> = ({
  indicatorName,
  filterMenuItems,
  defaultValue,
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
        <FilterMenu
          filterMenuItems={filterMenuItems}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </Stack>
    </Stack>
  )
}

export default IndicatorFilterBar
