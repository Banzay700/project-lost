import { FC } from 'react'
import { IndicatorFilterBar, TableBillsLine } from 'components'
import { useGetAllBillsQuery, useLazyGetOneBillQuery } from 'store/api'
import { Pagination, Table } from 'UI'
import { useActiveTableLine, useBillsReducer, useParamsSearchFilter } from 'hooks'
import { BillsType } from 'types'
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
  const { active, setActive } = useActiveTableLine(data?.data as BillsType[])

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
      <Table isLoading={isFetching} tableTitles={tableTitleBills} tableMinWidth="750px">
        {!isFetching &&
          data?.data.map((el) => (
            <TableBillsLine
              element={el}
              key={el?.id}
              active={active}
              setActive={setActive}
              onClickAction={handleSendBillsData}
              onClickLine={handleLineBillsData}
            />
          ))}
      </Table>
      {data && data.totalCount > 10 && (
        <Pagination
          marginRight="30px"
          count={Math.ceil(data.totalCount / 10)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </>
  )
}

export default TableBills
