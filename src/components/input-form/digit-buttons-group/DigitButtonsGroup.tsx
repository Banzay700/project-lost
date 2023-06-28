import { FC } from 'react'
import { BlurButton } from 'UI/index'
import { ButtonLoginReturnType } from 'types/index'
import { Icon } from 'assets/index'
import digits from './digitButtonsGroup.utils'
import { FormWrapper } from './DigitButtonsGroup.styled'

interface DigitButtonsGroupProps {
  getValue: (value: ButtonLoginReturnType) => void
}

const DigitButtonsGroup: FC<DigitButtonsGroupProps> = (props) => {
  const { getValue } = props

  const buttonsD = digits.map((item) => (
    <BlurButton value={item} key={item} getValue={getValue}>
      {item}
    </BlurButton>
  ))

  return (
    <FormWrapper>
      {buttonsD}
      <BlurButton value="clear" getValue={getValue}>
        C
      </BlurButton>
      <BlurButton value={0} getValue={getValue}>
        O
      </BlurButton>
      <BlurButton value="delete" getValue={getValue}>
        <Icon.Delete />
      </BlurButton>
    </FormWrapper>
  )
}

export default DigitButtonsGroup
