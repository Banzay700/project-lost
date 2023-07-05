import { FC } from 'react'

import { StatisticLabelsResponseType } from 'types'
import { LabelItem } from './label-item'
import { LabelsGroupWrapper } from './LabelsGroup.styled'

interface LabelsGroupProps {
  data: StatisticLabelsResponseType[]
}

const LabelsGroup: FC<LabelsGroupProps> = ({ data }) => {
  return (
    <LabelsGroupWrapper>
      {data.map((item) => (
        <LabelItem key={item.title} labelInfo={item} />
      ))}
    </LabelsGroupWrapper>
  )
}

export default LabelsGroup
