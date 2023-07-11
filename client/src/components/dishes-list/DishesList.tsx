import { FC } from 'react'
import { DishType } from 'types'
import { useSmoothScrollbar } from 'hooks'
import { DishesListSkeleton } from 'UI'
import { GridWrapper } from './DishesList.styled'
import { DishCard } from './dish-сard'

interface DishesListProps {
  dishes?: DishType[]
  isLoading?: boolean
}

const DishesList: FC<DishesListProps> = ({ dishes, isLoading }) => {
  const containerRef = useSmoothScrollbar<HTMLDivElement>()
  const justifyContent = dishes && dishes?.length > 6 ? 'center' : 'start'
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      }}
      ref={containerRef}>
      <GridWrapper style={{ justifyContent }}>
        {isLoading && <DishesListSkeleton />}
        {!isLoading && dishes?.map((dish) => <DishCard key={dish.id} dish={dish} />)}
      </GridWrapper>
    </div>
  )
}

export default DishesList
