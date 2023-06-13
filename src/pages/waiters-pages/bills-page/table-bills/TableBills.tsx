import { FC } from 'react'

import { Table, IndicatorFilterBar } from 'components'
import { useGetAllBillsQuery, useLazyGetOneBillQuery } from 'store/api'
import { useAppDispatch, useBillsReducer, useParamsSearchFilter } from 'hooks'
import { changeToggleValue } from 'store/reducers'
import { Pagination, Stack } from '@mui/material'
import { tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const dispatch = useAppDispatch()
  const { newBill } = useBillsReducer()
  const {
    params: orderType,
    page,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('orderType')
  const { data, isLoading } = useGetAllBillsQuery({ orderType, page, limit: 7 })
  const [getBill] = useLazyGetOneBillQuery()

  const handleSendBillsData = (id: string) => {
    getBill(id)
    dispatch(changeToggleValue('Payment'))
  }

  const handleLineBillsData = (id: string) => {
    if (newBill.id !== id) {
      getBill(id)
    }
    dispatch(changeToggleValue('Order info'))
  }

  return (
    <Stack sx={{ height: '100%' }}>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        onChange={handleFilterCategory}
      />
      <Table
        isLoading={isLoading}
        data={data?.data}
        tableTitles={tableTitleBills}
        tableType="bills"
        tableMinWidth="750px"
        onClickAction={handleSendBillsData}
        onClickLine={handleLineBillsData}
      />
      <Stack
        sx={{
          height: 'fit-content',
          alignItems: 'flex-end',
          marginRight: '30px',
          p: { md: '20px', xs: '10px' },
          flex: 0,
        }}>
        {data && (
          <Pagination
            count={Math.ceil(data.totalCount / 7)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            page={Number(page)}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default TableBills
