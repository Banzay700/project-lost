import { FC } from 'react'
import { Stack } from '@mui/material'
import { Icon } from 'assets'
import { Button } from 'UI'
import { useIsModal, useOrderReducer } from 'hooks'
import { DishType } from 'types'
import { ModalDishDetailInfo } from 'components'
import { FadeIn } from 'utils/index'
import { DishCardMedia } from './dish-card-media'
import { DishCardTitle } from './dish-card-title'
import { DishCardPricing } from './dish-card-pricing'
import { DishButtonWrapper, DishWrapper } from './DishCard.styled'

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
        <DishButtonWrapper>
          <Button
            variant="text"
            size="small"
            onClick={handleClickDetailInfo}
            icon={<Icon.More />}
          />
        </DishButtonWrapper>
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
      </FadeIn>
    </DishWrapper>
  )
}

export default DishCard
