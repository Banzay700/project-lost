import { FC, useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import EmployeesItem from './EmployeesItem'
import s from './EmployeesCarrousel.module.scss'

const employeesInfo = [
  {
    id: ' 1fvccbmht',
    name: 'Beby Jovancy',
    picture:
      'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    id: ' vvbnm,j',
    name: 'Bena Kane',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
  },
  {
    id: ' 1fvcdsdddcbmht',
    name: 'Aisyah Zidni',
    picture:
      'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    id: ' vvcdddbnm,j',
    name: 'Firmino Kudo',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
  },
  {
    id: ' vvbnm,j1',
    name: 'Bena Kane',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
  },
  {
    id: ' 1fvcdsdddcbm4ht',
    name: 'Aisyah Zidni',
    picture:
      'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    id: ' vvcdddbnm8j',
    name: 'Firmino Kudo',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
  },
]

const EmployeesCarrousel: FC = () => {
  const slideWidth = 177

  const [chosenEmployee, setChosenEmployee] = useState('')
  const [currentTranslateX, setCurrentTranslateX] = useState(0)

  const handleSetActiveSlide = (id: string) => {
    setChosenEmployee(id)
  }

  const handleRightArrow = () => {
    setCurrentTranslateX((prevTranslateX) => prevTranslateX - slideWidth)
  }

  const handleLeftArrow = () => {
    if (currentTranslateX === employeesInfo.length * slideWidth) {
      setCurrentTranslateX(0)
    } else {
      setCurrentTranslateX((prevTranslateX) => prevTranslateX + slideWidth)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: { keyCode: number }) => {
      if (event.keyCode === 39) {
        handleRightArrow()
      } else if (event.keyCode === 37) {
        handleLeftArrow()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const sliderStyle = {
    transform: `translateX(${currentTranslateX}px)`,
    width: employeesInfo.length * slideWidth,
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
    <Box className={s.carrouselWrapper} onKeyPress={handleRightArrow}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={15}
        style={sliderStyle}
        className={s.carrouselItems}>
        {employeesRender()}
      </Stack>
    </Box>
  )
}

export default EmployeesCarrousel
