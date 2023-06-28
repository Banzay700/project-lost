import { ChangeEvent, FC } from 'react'
import { Pagination as PaginationMui, useMediaQuery, useTheme } from '@mui/material'
import { PaginationWrapper } from 'UI/pagination/Pagination.styled'

interface PaginationProps {
  page: number
  onChange: (event: ChangeEvent<unknown>, value: number) => void
  count: number
  disabled?: boolean
  position?: 'flex-start' | 'center' | 'flex-end'
  marginRight?: string
  marginLeft?: string
}

const Pagination: FC<PaginationProps> = ({
  page,
  count,
  disabled,
  marginRight,
  marginLeft,
  position,
  onChange,
}) => {
  const { breakpoints } = useTheme()
  const isMobileScreen = useMediaQuery(breakpoints.down('sm'))

  return (
    <PaginationWrapper alignItems={position || 'flex-end'} sx={{ marginRight, marginLeft }}>
      {disabled && (
        <PaginationMui
          count={count}
          variant="text"
          shape="rounded"
          color="primary"
          size={isMobileScreen ? 'small' : 'medium'}
          onChange={onChange}
          page={page}
        />
      )}
    </PaginationWrapper>
  )
}

export default Pagination
