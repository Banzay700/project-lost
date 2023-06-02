import { FC } from 'react'
import { Stack } from '@mui/material'
import { FilterMenu } from 'UI'

import { FilterMenuItemType } from 'types'
import { IndicatorsGroup } from 'components/indicators-group'

interface OrderFilterBarProps {
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange: (value: string[]) => void
}

const IndicatorFilterBar: FC<OrderFilterBarProps> = ({
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
      <IndicatorsGroup />
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
