import { useLocation, useNavigate } from 'react-router-dom'
import { ChangeEvent } from 'react'

export const useParamsSearchFilter = (params: string) => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const type = searchParams.get(params)
  const field = searchParams.get('search')
  const page = searchParams.get('page')

  const handleFilterCategory = (value: string[]) => {
    if (!value.some((item) => item === 'all')) {
      searchParams.set(params, value.join(','))
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete(params)
      navigate(`?${searchParams.toString()}`)
    }
  }

  const handleFilterTitle = (value: string) => {
    if (value) {
      searchParams.set('search', value)
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete('search')
      navigate(`?${searchParams.toString()}`)
    }
  }

  const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
    if (value) {
      searchParams.set('page', value.toString())
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete('page')
      navigate(`?${searchParams.toString()}`)
    }
  }

  return {
    params: type || undefined,
    field: field || undefined,
    page: page || '1',
    handleFilterCategory,
    handleFilterTitle,
    handlePagination,
  }
}
