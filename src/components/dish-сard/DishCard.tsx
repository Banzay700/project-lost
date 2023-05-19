import { FC, useState } from 'react'
import { useAppDispatch, useHover } from 'hooks/index'
import { addDishToOrder } from 'store/reducers'
import { Card, Stack } from '@mui/material'
import { Button } from 'UI/button'
import { IconMore } from 'assets/icons'
import DishCardModal from './DishCardModal'
import s from './DishCard.module.scss'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'

interface DishCardProps {
  id: string
  image: string
  title: string
  price: number
  description: string
  weightProduct: number
}

const DishCard: FC<DishCardProps> = (props) => {
  const { image, title, price, description, id, weightProduct } = props
  const [ref, isHovered] = useHover<HTMLDivElement>()
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useAppDispatch()

  const handleClickOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleAddProductToOrder = () => {
    dispatch(addDishToOrder({ id, amount: 1 }))
  }

  return (
    <Card ref={ref} className={s.card}>
      <Button
        variant="text"
        size="small"
        onClick={handleClickOpenModal}
        icon={<IconMore />}
        className={s.icon}
      />
      <Stack spacing="12px">
        <DishCardMedia title={title} image={image} />
        <Stack spacing="8px" sx={{ transition: '1s' }}>
          <DishCardTitle title={title} isHovered={isHovered} />
          <DishCardPricing
            price={price}
            isHovered={isHovered}
            onClickButton={handleAddProductToOrder}
          />
        </Stack>
      </Stack>
      <DishCardModal
        open={openModal}
        onClose={handleCloseModal}
        description={description}
        weightProduct={weightProduct}
      />
    </Card>
  )
}

export default DishCard
