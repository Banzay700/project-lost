import { FC } from 'react'
import { Stack } from '@mui/material'
import { BlurButton } from 'UI/index'
import { ButtonLoginReturnType } from 'types/index'
import { Icon } from 'assets/index'
import digits from './digitButtonsGroup.utils'

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
    <Stack flexDirection="row" flexWrap="wrap" gap="16px" width="404px">
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
    </Stack>
  )
}

export default DigitButtonsGroup
