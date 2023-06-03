import { useLocation, useNavigate } from 'react-router-dom'

export const useSearchParamsType = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const type = searchParams.get('type')

  const handleChangeFilter = (value: string[]) => {
    if (!value.some((item) => item === 'all')) {
      searchParams.set('type', value.join(','))
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete('type')
      navigate(`?${searchParams.toString()}`)
    }
  }

  return { orderType: type, handleChangeFilter }
}
