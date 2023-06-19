import { FC } from 'react'
import { ErrorContent } from 'UI'

const NotFoundPage: FC = () => {
  return (
    <ErrorContent
      status={404}
      errorMessage="Sorry the page you are looking for does not exist"
      title="ooops! page not found"
    />
  )
}

export default NotFoundPage
