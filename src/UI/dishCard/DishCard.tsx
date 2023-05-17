import { FC, useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Button } from 'UI/button'
import { IconMore, IconPlus } from 'assets/icons'
import s from './DishCard.module.scss'
import DishCardModal from './DishCardModal'

interface DishCardProps {
  image: string
  title: string
  price: number
  description: string
}

const DishCard: FC<DishCardProps> = ({ image, title, price, description }) => {
  const [openModal, setOpenModal] = useState(false)
  const handleClickOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClickButton = () => {}

  return (
    <Card sx={{ maxWidth: 219 }} className={s.card}>
      <CardMedia className={s.image} component="img" image={image} alt={title} />
      <IconMore className={s.icon} onClick={handleClickOpenModal} />
      <CardContent className={s.content}>
        <Typography variant="h2" color="secondary.main" className={s.title}>
          {title}
        </Typography>
        <div className={s.wrapper}>
          <Typography variant="h2" color="primary.main" className={s.title}>
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
      <DishCardModal open={openModal} onClose={handleCloseModal} description={description} />
    </Card>
  )
}

export default DishCard