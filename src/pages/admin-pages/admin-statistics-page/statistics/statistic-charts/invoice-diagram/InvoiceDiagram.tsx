import { FC, useEffect } from 'react'

import { VerticalDiagram, ChartContainer } from 'components'
import { BarChartSkeleton } from 'UI'
import { useLazyGetGeneralTotalQuery } from 'store/api'
import { selectInvoiceData } from './InvoiceDiagram.utils'

const InvoiceDiagram: FC = () => {
  const [changePeriod, { data, isSuccess, isLoading }] = useLazyGetGeneralTotalQuery()

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
      {isSuccess && data && <VerticalDiagram data={data} />}
      {isLoading && <BarChartSkeleton barItemsColor="primary.extraLight" />}
    </ChartContainer>
  )
}

export default InvoiceDiagram
