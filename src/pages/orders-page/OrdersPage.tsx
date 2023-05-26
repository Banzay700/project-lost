import { FC } from 'react'
import { Table, IndicatorFilterBar } from 'components'
import { dataMokOrder } from 'utils'

const OrdersPage: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }
  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table data={dataMokOrder} />
    </>
  )
}

export default OrdersPage
