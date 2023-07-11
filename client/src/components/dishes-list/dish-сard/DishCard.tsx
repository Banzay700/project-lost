import { FC } from 'react'
import { Stack } from '@mui/material'

import { useIsModal, useOrderReducer } from 'hooks'
import { DishType } from 'types'
import { ModalDishDetailInfo } from 'components'
import { FadeIn } from 'utils'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'
import { DishWrapper } from './DishCard.styled'

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
    <DishWrapper>
      <FadeIn styles={{ height: '100%', width: '100%' }}>
        <Stack spacing="12px" height="100%">
          <DishCardMedia title={title} image={picture} onClick={handleClickDetailInfo} />
          <Stack spacing="8px" sx={{ height: '100%', justifyContent: 'space-between' }}>
            <DishCardTitle title={title} />
            <DishCardPricing price={price} onClickButton={handleAddProductToOrder} />
          </Stack>
        </Stack>
        <ModalDishDetailInfo
          dish={dish}
          isOpenModal={isOpen}
          onCloseModal={handleToggleIsOpenModal}
        />
      </FadeIn>
    </DishWrapper>
  )
}

export default DishCard
