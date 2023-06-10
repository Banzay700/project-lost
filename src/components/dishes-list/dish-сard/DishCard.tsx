import { FC } from 'react'
import { Card, Stack } from '@mui/material'
import { Icon } from 'assets'
import { Button } from 'UI'
import { useIsModal, useOrderReducer } from 'hooks'
import { DishType } from 'types/DishType'
import { ModalDishDetailInfo } from 'components'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'
import s from './DishCard.module.scss'

interface DishCardProps {
  dish: DishType
}

const DishCard: FC<DishCardProps> = ({ dish }) => {
  const { picture, title, price, id } = dish
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const { addDish } = useOrderReducer()

  const handleAddProductToOrder = () => {
    addDish({ dishID: id, price, title, amount: 1, picture, dishTotalPrice: price })
  }

  const handleClickDetailInfo = () => {
    handleToggleIsOpenModal()
  }

  return (
    <Card className={s.card}>
      <Button
        variant="text"
        size="small"
        onClick={handleClickDetailInfo}
        icon={<Icon.More />}
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
      <ModalDishDetailInfo
        dish={dish}
        isOpenModal={isOpen}
        onCloseModal={handleToggleIsOpenModal}
      />
    </Card>
  )
}

export default DishCard
