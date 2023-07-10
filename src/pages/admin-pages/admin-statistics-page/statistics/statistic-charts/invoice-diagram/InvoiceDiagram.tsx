import { FC, useEffect } from 'react'
import { VerticalDiagram, ChartContainer } from 'components'
import { useLazyGetGeneralTotalQuery } from 'store/api'
import { selectInvoiceData } from './InvoiceDiagram.utils'

const InvoiceDiagram: FC = () => {
  const [changePeriod, { data: dataGeneralTotal }] = useLazyGetGeneralTotalQuery()

  const handleChangePeriod = (period: string) => changePeriod({ period })

  useEffect(() => {
    changePeriod({})
  }, [changePeriod])

  return (
    <ChartContainer
      size={6}
      onSelectChange={handleChangePeriod}
      selectDefaultTitle="Month"
      selectData={selectInvoiceData}>
      {dataGeneralTotal && <VerticalDiagram data={dataGeneralTotal} />}
    </ChartContainer>
  )
}

export default InvoiceDiagram
