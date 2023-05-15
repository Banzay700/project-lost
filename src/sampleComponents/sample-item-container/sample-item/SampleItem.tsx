import { FC } from 'react'

import s from './SampleItem.module.scss'

interface SampleItemProps {
  test: string
}

const SampleItem: FC<SampleItemProps> = ({ test }) => {
  return <div className={s.test} id={test} />
}

export default SampleItem
