import { FC } from 'react'
import { DishProductType } from 'types'
import { DishCard } from 'components'
import s from './DishesList.module.scss'

interface DishesListProps {
  dishes: DishProductType[]
}

const DishesList: FC<DishesListProps> = ({ dishes }) => {
  return (
    <div className={s.gridContainer}>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          id={dish.id}
          image={dish.picture}
          title={dish.title}
          price={dish.price}
          description={dish.description}
          weightProduct={dish.weight}
        />
      ))}
    </div>
  )
}

export default DishesList
