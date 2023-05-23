import { FC } from 'react'
import { Table } from 'components/table'
import { dataMokBill } from 'utils'
import s from './BillsPage.module.scss'

// interface BillsPageProps {}

const BillsPage: FC = () => {
  return (
    <>
      <div>BillsPage</div>
      <Table data={dataMokBill} />
    </>
  )
}

export default BillsPage
