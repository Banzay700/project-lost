import { FC } from 'react'
import { Table, IndicatorFilterBar } from 'components'
import { DataTableCellFuncType, TableDataItem, BillsResponseType } from 'types'
import { useGetAllBillsQuery } from 'store/api'
import { useSearchParamsType } from 'hooks'
import { tableTitleBills, dataTableCellBills } from './tableBills.utils'

const TableBills: FC = () => {
  const { type, handleChangeFilter } = useSearchParamsType()
  const { data: dataBills } = useGetAllBillsQuery({ type })

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['delivery', 'dineIn', 'takeAway']}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataBills as BillsResponseType[]}
        tableTitles={tableTitleBills}
        dataTableCell={dataTableCellBills as DataTableCellFuncType<TableDataItem>}
      />
    </>
  )
}

export default TableBills
