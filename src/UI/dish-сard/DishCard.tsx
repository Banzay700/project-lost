import { FC, useState } from 'react'
import { useAppDispatch } from 'hooks'
import { addDishToOrder } from 'store/reducers'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Button } from 'UI'
import { IconMore, IconPlus } from 'assets'
import DishCardModal from './DishCardModal'
import s from './DishCard.module.scss'


interface DishCardProps {
  id: string
  image: string
  title: string
  price: number
  description: string
  weight: number
}

const DishCard: FC<DishCardProps> = (props) => {
  const { image, title, price, description, id, weight } = props
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useAppDispatch()

  const handleClickOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClickButton = () => {
    dispatch(addDishToOrder({ id, amount: 1 }))
  }

  return (
    <Card sx={{ maxWidth: 219 }} className={s.card}>
      <CardMedia className={s.image} component="img" image={image} alt={title} />
      <Button
        variant="text"
        size="small"
        onClick={handleClickOpenModal}
        icon={<IconMore />}
        className={s.icon}
      />
      <CardContent className={s.content}>
        <Typography
          component="h5"
          variant="h2"
          color="secondary.main"
          fontWeight={600}
          textAlign="center">
          {title}
        </Typography>
        <div className={s.wrapper}>
          <Typography
            component="p"
            variant="h2"
            color="primary.main"
            fontWeight={600}
            textAlign="center">
            <span className={s.priceTitle}>Price</span>
            {`${price} ₴`}
          </Typography>
          <Button
            className={s.button}
            variant="contained"
            size="small"
            color="secondary"
            icon={<IconPlus />}
            onClick={handleClickButton}
          />
        </div>
      </CardContent>
      <DishCardModal
        open={openModal}
        onClose={handleCloseModal}
        description={description}
        weight={weight}
      />
    </Card>
  )
}

export default DishCard
