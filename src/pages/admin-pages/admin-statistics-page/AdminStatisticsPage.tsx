import { useParams } from 'react-router-dom'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { SidebarTabsList } from 'components'
import { Icon } from 'assets'
import { useRelocateDefaultLocation } from 'hooks'
import { Statistics } from './statistics'
import { adminStatisticsPageTabs, ROUTES_STATISTICS } from './AdminStatisticsPage.utils'

const AdminStatisticsPage: FC = () => {
  const { statistics } = useParams()

  useRelocateDefaultLocation({
    isParams: statistics,
    relocateTo: adminStatisticsPageTabs[0].linkTo,
  })

  return (
    <>
      <SidebarTabsList
        sidebarTabItems={adminStatisticsPageTabs}
        title="Statistics"
        titleIcon={<Icon.Statistics />}
      />
      {statistics === ROUTES_STATISTICS.SALES && <Statistics />}
    </>
  )
}

export default AdminStatisticsPage
