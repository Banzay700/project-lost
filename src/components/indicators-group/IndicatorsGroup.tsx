import { FC } from 'react'
import { Stack } from '@mui/material'

import { Indicator } from 'UI'
import { useRootLocationPath } from 'hooks'
import { indicatorsNamesVariants } from './IndicatorsGroup.utils'

const IndicatorsGroup: FC = () => {
  const path = useRootLocationPath()
  const { orders, bills, reservation } = indicatorsNamesVariants
  const indicatorsNames = path === 'orders' ? orders : bills

  return (
    <Stack direction="row" spacing="32px">
      {indicatorsNames.map((item) => (
        <Indicator key={item} type={item} />
      ))}
    </Stack>
  )
}

export default IndicatorsGroup
