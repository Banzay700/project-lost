import { FC } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { UserInLoginType } from 'types'
import { responsive } from './EmployeesCarrousel.utils'
import { EmployeesCarrouselItem } from './employees-carrousel-item'
import { BoxWrapper } from './EmployeesCarrousel.styled'

interface EmployeesCarrouselProps {
  employeesData: UserInLoginType[]
  handleSetActiveSlide: (id: string) => void
  chosenEmployee: string
}

const EmployeesCarrousel: FC<EmployeesCarrouselProps> = (props) => {
  const { employeesData, chosenEmployee, handleSetActiveSlide } = props

  const employeesRender = () => {
    return employeesData.map((item) => {
      const isActive = chosenEmployee === item.id

      return (
        <EmployeesCarrouselItem
          key={item.id}
          {...item}
          onClick={handleSetActiveSlide}
          isActive={isActive}
        />
      )
    })
  }

  return (
    <BoxWrapper>
      <Carousel arrows={false} infinite draggable responsive={responsive}>
        {employeesRender()}
      </Carousel>
    </BoxWrapper>
  )
}

export default EmployeesCarrousel
