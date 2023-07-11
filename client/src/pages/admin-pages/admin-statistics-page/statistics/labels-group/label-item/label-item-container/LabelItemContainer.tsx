import { FC, ReactNode } from 'react'

import { DecorLine, ItemContainer } from './LabelItemContainer.styled'

interface LabelItemContainerProps {
  children: ReactNode
}

const LabelItemContainer: FC<LabelItemContainerProps> = ({ children }) => {
  return (
    <ItemContainer>
      <DecorLine />
      {children}
    </ItemContainer>
  )
}

export default LabelItemContainer
