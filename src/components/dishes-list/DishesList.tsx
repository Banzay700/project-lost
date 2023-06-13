import { FC } from 'react'
import { DishType } from 'types'
import { useSmoothScrollbar } from 'hooks'
import { generateArray } from 'utils'
import { DishCard } from './dish-сard'

import s from './DishesList.module.scss'
import { DishCardSkeleton } from './dish-card-skeleton'

interface DishesListProps {
  dishes?: DishType[]
  isLoading?: boolean
}

const DishesList: FC<DishesListProps> = ({ dishes, isLoading }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const newArray = generateArray(12)
  let skeleton
  if (isLoading) {
    skeleton = newArray.map((item) => <DishCardSkeleton key={item} />)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
      ref={containerRef}>
      <div className={s.gridContainer}>
        {skeleton}
        {dishes?.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  )
}

export default DishesList
