import { FC } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { UserInLoginType } from 'types'
import { Img, StackWrapper } from './EmployeesCarrouselItem.styled'

interface EmployeesItemProps extends UserInLoginType {
  isActive: boolean
  onClick: (id: string) => void
}
const EmployeesCarrouselItem: FC<EmployeesItemProps> = (props) => {
  const { id, firstName, secondName, userImage, isActive, onClick } = props

  return (
    <StackWrapper spacing={2} isActive={isActive}>
      <Box onClick={() => onClick(id)}>
        <Img src={userImage} alt={secondName} isActive={isActive} />
      </Box>
      <Typography variant="h3" component="div" color={useTheme().palette.text.addition}>
        {`${firstName} ${secondName}`}
      </Typography>
    </StackWrapper>
  )
}

export default EmployeesCarrouselItem
