import { SidebarTabsList } from 'components/index'
import { FC } from 'react'
import { SidebarTabItemType } from 'types'
import {
  IconBusinessSummary,
  IconFeedbacks,
  IconMarketing,
  IconSales,
  IconSavedReports,
  IconStatistics,
} from 'assets'
import { useParams } from 'react-router-dom'
import { useRelocateDefaultLocation } from 'hooks/useRelocateDefaultLocation.hook'

const mokStatistics: SidebarTabItemType[] = [
  {
    linkTo: 'sales',
    icon: <IconSales />,
    label: 'Sales',
  },
  {
    linkTo: 'marketing',
    icon: <IconMarketing />,
    label: 'Marketing',
  },
  {
    linkTo: 'business-summary',
    icon: <IconBusinessSummary />,
    label: 'Business Summary',
  },
  {
    linkTo: 'saved-reports',
    icon: <IconSavedReports />,
    label: 'Saved Reports',
  },
  {
    linkTo: 'feedbacks',
    icon: <IconFeedbacks />,
    label: 'Feedbacks',
  },
]

const AdminStatisticsPage: FC = () => {
  const { statistics } = useParams()

  useRelocateDefaultLocation({
    isParams: statistics,
    relocateTo: mokStatistics[0].linkTo,
  })

  return (
    <SidebarTabsList
      sidebarTabItems={mokStatistics}
      title="Statistics"
      titleIcon={<IconStatistics />}
    />
  )
}

export default AdminStatisticsPage
