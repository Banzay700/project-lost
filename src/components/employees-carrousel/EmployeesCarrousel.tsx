/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState } from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import EmployeesItem from './EmployeesItem'

import s from './EmployeesCarrousel.module.scss'
import { employeesInfo } from './mockData'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
}

interface EmployeesCarrouselProps {
  bgc: 'transparent' | 'brown'
}
const EmployeesCarrousel: FC<EmployeesCarrouselProps> = ({ bgc }) => {
  const carrouselBGC = {
    brown: '#291d1a',
    transparent: 'unset',
  }

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
