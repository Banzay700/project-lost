import { FC } from 'react'
import { Table } from 'components/table'
import { dataMokBill } from 'utils'
import s from './BillsPage.module.scss'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'

// interface BillsPageProps {}

const BillsPage: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['delivery', 'takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table data={dataMokBill} />
    </>
  )
}

export default BillsPage
