import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import classNames from 'classnames'
import { IEmployee } from 'types/IEmployee'
import s from './EmployeesCarrousel.module.scss'

interface EmployeesItemProps extends IEmployee {
  isActive: boolean
  onClick: (id: string) => void
}
const EmployeesItem: FC<EmployeesItemProps> = (props) => {
  const { id, firstName, secondName, userImage, isActive, onClick } = props

  const imgClasses = classNames(s.img, { [s.activeImg]: isActive })
  const cardClasses = classNames(s.carrouselItem, { [s.active]: isActive })
  const alignSelf = isActive ? 'start' : 'center'

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifySelf={alignSelf}
      className={cardClasses}
      onClick={() => onClick(id)}>
      <Box>
        <img src={userImage} alt={secondName} className={imgClasses} />
      </Box>
      <Typography variant="h3" component="div" color="#fff">
        {`${firstName} ${secondName}`}
      </Typography>
    </Stack>
  )
}

export default EmployeesItem
