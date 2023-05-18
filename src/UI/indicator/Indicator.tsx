import { FC } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { IconAway, IconDelivery, IconDineIn } from 'assets/icons'
import { formatString } from 'utils'
import s from './Indicator.module.scss'

interface IndicatorProps {
  type: 'takeAway' | 'dineIn' | 'delivery'
}

const icons = {
  takeAway: <IconAway />,
  dineIn: <IconDineIn />,
  delivery: <IconDelivery />,
}

const Indicator: FC<IndicatorProps> = ({ type }) => {
  return (
    <ListItem className={s.indicator}>
      {icons[type]}
      <ListItemText primary={formatString(type)} />
    </ListItem>
  )
}


export default Indicator