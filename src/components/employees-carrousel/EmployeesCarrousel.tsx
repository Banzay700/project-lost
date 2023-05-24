/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState } from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import EmployeesItem from './EmployeesItem'
import { responsive, carrouselBGC } from './EmployeesCarrousel.utils'
import s from './EmployeesCarrousel.module.scss'
import { employeesInfo } from './mockData'

interface EmployeesCarrouselProps {
  bgc: 'transparent' | 'brown'
}

const EmployeesCarrousel: FC<EmployeesCarrouselProps> = ({ bgc }) => {
  const [chosenEmployee, setChosenEmployee] = useState('')

  const handleSetActiveSlide = (id: string) => {
    setChosenEmployee(id)
  }

  const employeesRender = () => {
    return employeesInfo.map((item) => {
      const isActive = chosenEmployee === item.id

      return (
        <EmployeesItem key={item.id} {...item} onClick={handleSetActiveSlide} isActive={isActive} />
      )
    })
  }

  return (
    <Box sx={{ bgcolor: carrouselBGC[bgc], display: 'inline-block' }}>
      <Carousel
        arrows={false}
        infinite
        draggable
        responsive={responsive}
        containerClass={s.carrouselWrapper}
        sliderClass={s.carrouselContainer}>
        {employeesRender()}
      </Carousel>
    </Box>
  )
}

export default EmployeesCarrousel
