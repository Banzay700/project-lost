import { FC } from 'react'
import { Stack } from '@mui/material'
import { FilterMenu, PageActionsBar } from 'UI/index'

import { FilterMenuItemType, IndicatorItemType } from 'types/index'
import { IndicatorsGroup } from 'components/index'

interface IndicatorFilterBarProps {
  filterMenuItems?: FilterMenuItemType[]
  indicatorData?: IndicatorItemType[]
  defaultValue?: string[]
  onChange: (value: string[]) => void
  isFilterMenu?: boolean
}

const IndicatorFilterBar: FC<IndicatorFilterBarProps> = (props) => {
  const { filterMenuItems, defaultValue, isFilterMenu, indicatorData, onChange } = props

  return (
    <PageActionsBar>
      <IndicatorsGroup indicatorData={indicatorData} />
      {isFilterMenu && (
        <Stack>
          <FilterMenu
            filterMenuItems={filterMenuItems}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        </Stack>
      )}
    </PageActionsBar>
  )
}

export default IndicatorFilterBar
