import { FC } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { IconAway, IconDelivery, IconDineIn } from 'assets/icons'
import s from './Indicator.module.scss'

interface IndicatorProps {
  type: 'away' | 'dineIn' | 'delivery'
}

const Indicator: FC<IndicatorProps> = ({ type }) => {
  return (
    <ListItem className={s.indicator}>
      {type === 'away' && (
        <>
          <IconAway />
          <ListItemText primary="Take away" />
        </>
      )}
      {type === 'dineIn' && (
        <>
          <IconDineIn />
          <ListItemText primary="Dine in" />
        </>
      )}
      {type === 'delivery' && (
        <>
          <IconDelivery />
          <ListItemText primary="Delivery" />
        </>
      )}
    </ListItem>
  )
}

export default Indicator
