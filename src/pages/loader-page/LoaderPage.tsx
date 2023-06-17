import { FC } from 'react'
import { Loader } from 'UI'
import { LoaderPageWrapper } from './LoaderPage.styled'

const LoaderPage: FC = () => {
  return (
    <LoaderPageWrapper>
      <Loader />
    </LoaderPageWrapper>
  )
}

export default LoaderPage
