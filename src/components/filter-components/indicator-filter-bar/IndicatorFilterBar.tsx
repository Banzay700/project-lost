import { FC } from 'react'
import { Stack } from '@mui/material'
import { FilterMenu, PageActionsBar } from 'UI/index'

import { FilterMenuItemType } from 'types/index'
import { IndicatorsGroup } from 'components/index'

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
