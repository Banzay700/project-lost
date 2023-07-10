import { FC, useEffect } from 'react'
import { Stack } from '@mui/material'
import { VerticalDiagram, ChartContainer } from 'components'
import { useLazyGetGeneralTotalQuery } from 'store/api'
import { Icon } from 'assets'
import { selectInvoiceData } from './InvoiceDiagram.utils'

const InvoiceDiagram: FC = () => {
  const [changePeriod, { data: dataGeneralTotal }] = useLazyGetGeneralTotalQuery()

  const handleChangePeriod = (period: string) => changePeriod({ period })

  useEffect(() => {
    changePeriod({})
  }, [changePeriod])

  return (
    <ChartContainer
      size={8}
      onSelectChange={handleChangePeriod}
      selectDefaultTitle="Month"
      selectData={selectInvoiceData}>
      {dataGeneralTotal && (
        <Stack direction="row" alignItems="center">
          <Icon.Diagram />
          <VerticalDiagram data={dataGeneralTotal} />
        </Stack>
      )}
    </ChartContainer>
  )
}

export default InvoiceDiagram
