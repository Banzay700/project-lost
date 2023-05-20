import { FC, useState } from 'react'
import { Card, Stack } from '@mui/material'
import { IconMore } from 'assets'
import { Button } from 'UI'
import { useAppDispatch, useHover } from 'hooks'
import { addDishToOrder } from 'store/reducers'
import DishCardModal from './DishCardModal'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'
import s from './DishCard.module.scss'

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

  const handleOpenModal = () => setOpenModal(true)

  const handleCloseModal = () => setOpenModal(false)

  const handleAddProductToOrder = () => {
    dispatch(addDishToOrder({ id, amount: 1 }))
  }

  return (
    <Card ref={ref} className={s.card}>
      <Button
        variant="text"
        size="small"
        onClick={handleOpenModal}
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
