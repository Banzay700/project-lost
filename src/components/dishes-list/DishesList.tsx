import { FC, useEffect, useState } from 'react'
import { DishType } from 'types'
import { useSmoothScrollbar } from 'hooks'
import { DishesListSkeleton } from 'UI'
import { DishCard } from './dish-сard'

import s from './DishesList.module.scss'

interface DishesListProps {
  dishes?: DishType[]
  isLoading?: boolean
}

const DishesList: FC<DishesListProps> = ({ dishes, isLoading }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const [isLoadingDish, setIsLoadingDish] = useState(isLoading)

  useEffect(() => {
    setIsLoadingDish(isLoading)
  }, [isLoading])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
      ref={containerRef}>
      <div className={s.gridContainer}>
        {isLoadingDish && <DishesListSkeleton />}
        {!isLoading && dishes?.map((dish) => <DishCard key={dish.id} dish={dish} />)}
      </div>
    </div>
  )
}

export default DishesList
