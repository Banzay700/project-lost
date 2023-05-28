import { FC, useState } from 'react'
import { Card, Stack } from '@mui/material'
import { IconMore } from 'assets'
import { Button } from 'UI'
import { useNewOrderReducer } from 'hooks'

import DishCardModal from './DishCardModal'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'
import s from './DishCard.module.scss'

interface DishCardProps {
  id: string
  picture: string
  title: string
  price: number
  description: string
  weightProduct: number
}

const DishCard: FC<DishCardProps> = (props) => {
  const { picture, title, price, description, id, weightProduct } = props
  const [openModal, setOpenModal] = useState(false)
  const { addDish } = useNewOrderReducer()

  const handleOpenModal = () => setOpenModal(true)

  const handleCloseModal = () => setOpenModal(false)

  const handleAddProductToOrder = () => {
    addDish({ id, price, title, amount: 1, picture, dishTotalPrice: price })
  }

  return (
    <Card className={s.card}>
      <Button
        variant="text"
        size="small"
        onClick={handleOpenModal}
        icon={<IconMore />}
        className={s.icon}
      />
      <Stack spacing="12px" height="100%">
        <DishCardMedia title={title} image={picture} />
        <Stack
          spacing="8px"
          sx={{ transition: '1s', height: '100%', justifyContent: 'space-between' }}>
          <DishCardTitle title={title} />
          <DishCardPricing price={price} onClickButton={handleAddProductToOrder} />
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
