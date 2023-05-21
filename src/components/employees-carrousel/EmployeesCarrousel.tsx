import { FC, useState } from 'react'
import { Stack } from '@mui/material'
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
  const [chosenEmployee, setChosenEmployee] = useState('')

  const handleClick = (id: string) => {
    setChosenEmployee(id)
  }

  const employeesRender = () => {
    return employeesInfo.map((item) => {
      const isActive = chosenEmployee === item.id

      return <EmployeesItem key={item.id} {...item} onClick={handleClick} isActive={isActive} />
    })
  }

  return (
    <Stack
      direction="row"
      spacing={16}
      alignItems="center"
      className={s.carrouselWrapper}
      onMouseDown={(e) => {
        console.log(e)
      }}>
      {employeesRender()}
    </Stack>
  )
}

export default EmployeesCarrousel
