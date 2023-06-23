import { FC, useState } from 'react'
import { RadioGroup } from '@mui/material'
import { RadioButtonCard } from 'UI/radio-button-card'
import { RadioGroupCardWrapper } from './RadioGroupCard.styled'
import { useSmoothScrollbar } from 'hooks/useSmoothScrollbar.hook'

interface RadioGroupCardProps {}

const RadioGroupCard: FC<RadioGroupCardProps> = () => {
  const [isActiveCard, setIsActiveCard] = useState('')
  const refScroll = useSmoothScrollbar<HTMLDivElement>('2px')
  const handleChangeActiveCard = (value: string) => {
    setIsActiveCard(value)
  }

  return (
    <RadioGroupCardWrapper ref={refScroll}>
      <RadioButtonCard value="test1" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
      <RadioButtonCard value="test2" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
      <RadioButtonCard value="test3" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
      <RadioButtonCard value="test4" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
      <RadioButtonCard value="test5" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
      <RadioButtonCard value="test6" isChecked={isActiveCard} onChange={handleChangeActiveCard} />
    </RadioGroupCardWrapper>
  )
}

export default RadioGroupCard
