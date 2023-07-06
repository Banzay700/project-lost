import { FC, ReactNode } from 'react'

import { NativeSelect } from 'UI'
import { ChartsContainer, ChartItem } from './ChartContainer.styled'

interface ChartContainerProps {
  size: 'big' | 'small'
  children: ReactNode
}

const ChartContainer: FC<ChartContainerProps> = ({ size, children }) => {
  const itemSize = size === 'big' ? 8 : 4
  return (
    <ChartsContainer item xs={itemSize}>
      <NativeSelect data={['sds']} defaultTitle="Top category" onChange={() => {}} />
      <ChartItem>{children}</ChartItem>
    </ChartsContainer>
  )
}

export default ChartContainer
