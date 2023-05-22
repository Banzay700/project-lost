import { FC } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import { DishProductType } from 'types'
import { DishCard } from 'components'

interface DishesListProps {
  dishes: DishProductType[]
}

const DishesList: FC<DishesListProps> = ({ dishes }) => {
  return (
    <Grid
      container
      spacing="16px"
      columns={{ xl: 4, lg: 4, md: 3, sm: 2, xs: 1 }}
      sx={{ padding: '16px', margin: 0 }}>
      {dishes.map((dish) => (
        <Grid key={dish.id} xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DishCard
            id={dish.id}
            image={dish.picture}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            weightProduct={dish.weight}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default DishesList
