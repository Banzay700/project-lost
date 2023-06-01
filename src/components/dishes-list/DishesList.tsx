import { FC } from 'react'
import { DishType } from 'types'
import { DishCard } from 'components'
import { useSmoothScrollbar } from 'hooks'

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
        background: '#F8F9FD',
        overflowY: 'auto',
      }}
      ref={containerRef}>
      <div className={s.gridContainer}>
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            id={dish.id}
            picture={dish.picture}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            weightProduct={dish.weight}
          />
        ))}
      </div>
    </div>
  )
}

export default DishesList
