import { FC } from 'react'

import { StatisticLabelsResponseType } from 'types'
import { StatisticLabelsSkeleton } from 'UI'
import { LabelItem } from './label-item'
import { LabelsGroupWrapper } from './LabelsGroup.styled'

interface LabelsGroupProps {
  data?: StatisticLabelsResponseType[]
  isLoading: boolean
}

const LabelsGroup: FC<LabelsGroupProps> = ({ data, isLoading }) => {
  const skeletonItemsRange = [...Array(4).keys()]

  return (
    <LabelsGroupWrapper>
      {!isLoading && data?.map((item) => <LabelItem key={item.title} labelInfo={item} />)}
      {isLoading && skeletonItemsRange.map((index) => <StatisticLabelsSkeleton key={index} />)}
    </LabelsGroupWrapper>
  )
}

export default LabelsGroup
