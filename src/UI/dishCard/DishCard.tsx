import { FC } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Button } from 'UI/button'
import { IconPlus } from 'assets/icons'
import s from './DishCard.module.scss'

interface DishCardProps {
  image: string
  title: string
  price: number
}

const DishCard: FC<DishCardProps> = ({ image, title, price }) => {
  const handleClickButton = () => {}

  return (
    <Card sx={{ maxWidth: 219 }} className={s.card}>
      <CardActionArea>
        <CardMedia className={s.image} component="img" image={image} alt="green iguana" />
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
      </CardActionArea>
    </Card>
  )
}

export default DishCard
