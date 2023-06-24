import { FC } from 'react'
import { Pagination, Stack } from '@mui/material'

import { Table, IndicatorFilterBar } from 'components'
import { useGetAllBillsQuery, useLazyGetOneBillQuery } from 'store/api'
import { useBillsReducer, useParamsSearchFilter } from 'hooks/index'
import { tableFilterMenuItem, tableIndicatorBills, tableTitleBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { newBill, changeToggle } = useBillsReducer()
  const {
    params: orderType,
    page,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('orderType')
  const { data, isFetching } = useGetAllBillsQuery({ orderType, page, limit: 10 })
  const [getBill] = useLazyGetOneBillQuery()

  const handleSendBillsData = (id: string) => {
    getBill(id)
    changeToggle('Payment')
  }

  const handleLineBillsData = (id: string) => {
    if (newBill.id !== id) {
      getBill(id)
    }
    changeToggle('Order info')
  }

  return (
    <>
      <IndicatorFilterBar
        isFilterMenu
        indicatorData={tableIndicatorBills}
        filterMenuItems={tableFilterMenuItem}
        defaultValue={orderType?.split(',')}
        onChange={handleFilterCategory}
      />
      <Table
        isLoading={isFetching}
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
            count={Math.ceil(data.totalCount / 10)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            page={Number(page)}
          />
        )}
      </Stack>
    </>
  )
}

export default TableBills
