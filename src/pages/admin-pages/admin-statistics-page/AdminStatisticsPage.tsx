import { useParams } from 'react-router-dom'
import { FC } from 'react'
import { SidebarTabsList } from 'components'
import { Icon } from 'assets'
import { useRelocateDefaultLocation } from 'hooks'
import { Stack } from '@mui/material'
import { Statistics } from './statistics'
import { mokStatistics } from './AdminStatisticsPage.utils'

const AdminStatisticsPage: FC = () => {
  const { statistics } = useParams()

  useRelocateDefaultLocation({
    isParams: statistics,
    relocateTo: mokStatistics[0].linkTo,
  })

  return (
    <Stack direction="row" width="100%">
      <SidebarTabsList
        sidebarTabItems={mokStatistics}
        title="Statistics"
        titleIcon={<Icon.Statistics />}
      />
      <Statistics />
    </Stack>
  )
}

export default AdminStatisticsPage
