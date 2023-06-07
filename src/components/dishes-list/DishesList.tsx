import { FC } from 'react'
import { DishType } from 'types'
import { useSmoothScrollbar } from 'hooks'
import { DishCard } from './dish-сard'

import s from './DishesList.module.scss'

interface DishesListProps {
  dishes: DishType[]
}

const DishesList: FC<DishesListProps> = ({ dishes }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
      ref={containerRef}>
      <div className={s.gridContainer}>
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  )
}

export default DishesList
