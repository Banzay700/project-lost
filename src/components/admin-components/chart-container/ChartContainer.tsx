import { FC, ReactNode } from 'react'

import { NativeSelect } from 'UI'
import { NativeSelectItemType } from 'types'
import { ChartsContainer, ChartItem } from './ChartContainer.styled'

interface ChartContainerProps {
  size: number
  children: ReactNode
  selectDefaultTitle?: string
  selectData?: NativeSelectItemType[]
  onSelectChange: (id: string) => void
}

const ChartContainer: FC<ChartContainerProps> = (props) => {
  const { size, selectData, selectDefaultTitle, children, onSelectChange } = props

  return (
    <ChartsContainer size={size}>
      {selectData && (
        <NativeSelect
          data={selectData}
          defaultTitle={selectDefaultTitle}
          onChange={onSelectChange}
        />
      )}
      <ChartItem>{children}</ChartItem>
    </ChartsContainer>
  )
}

export default ChartContainer
