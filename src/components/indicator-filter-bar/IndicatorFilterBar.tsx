import { FC } from 'react'
import { Stack } from '@mui/material'
import { FilterMenu, PageActionsBar } from 'UI'

import { FilterMenuItemType } from 'types'
import { IndicatorsGroup } from 'components'

interface OrderFilterBarProps {
  filterMenuItems: FilterMenuItemType[]
  defaultValue?: string[]
  onChange: (value: string[]) => void
}

const IndicatorFilterBar: FC<OrderFilterBarProps> = (props) => {
  const { filterMenuItems, defaultValue, onChange } = props

  return (
    <PageActionsBar>
      <IndicatorsGroup />
      <Stack>
        <FilterMenu
          filterMenuItems={filterMenuItems}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </Stack>
    </PageActionsBar>
  )
}

export default IndicatorFilterBar
