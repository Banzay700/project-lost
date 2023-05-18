import { FC } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { IconAwayIndicator, IconDeliveryIndicator, IconDineInIndicator } from 'assets/icons'
import { formatString } from 'utils'
import s from './Indicator.module.scss'

interface IndicatorProps {
  type: 'takeAway' | 'dineIn' | 'delivery'
}

const icons = {
  takeAway: <IconAwayIndicator />,
  dineIn: <IconDineInIndicator />,
  delivery: <IconDeliveryIndicator />,
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
