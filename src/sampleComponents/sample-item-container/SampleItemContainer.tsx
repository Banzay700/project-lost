import { FC, ReactNode } from 'react'

import { SampleItem } from './sample-item'
import s from './SampleItemContainer.module.scss'

interface SampleItemContainerProps {
  children: ReactNode
}

const SampleItemContainer: FC<SampleItemContainerProps> = ({ children }) => {
  return (
    <div className={s.test}>
      {children}
      <SampleItem test="test" />
    </div>
  )
}

export default SampleItemContainer
