import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import classNames from 'classnames'

import s from './EmployeesCarrousel.module.scss'

interface EmployeesItemProps {
  id: string
  name: string
  picture: string
  isActive: boolean
  onClick: (id: string) => void
}
const EmployeesItem: FC<EmployeesItemProps> = (props) => {
  const { id, name, picture, isActive, onClick } = props

  const imgClasses = classNames(s.img, { [s.activeImg]: isActive })
  const cardClasses = classNames(s.carrouselItem, { [s.active]: isActive })

  return (
    <Box onClick={() => onClick(id)}>
      <Stack direction="column" spacing={2} alignItems="center" className={cardClasses}>
        <Box>
          <img src={picture} alt={name} className={imgClasses} />
        </Box>
        <Typography variant="h3" component="div" color="#fff">
          {name}
        </Typography>
      </Stack>
    </Box>
  )
}

export default EmployeesItem
