import { SidebarTabsList } from 'components/index'
import { FC } from 'react'
import { SidebarTabItemType } from 'types'
import {
  IconBusinessSummary,
  IconFeedbacks,
  IconMarketing,
  IconSales,
  IconSavedReports,
} from 'assets'

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
  return <SidebarTabsList sidebarTabItems={mokStatistics} />
}

export default AdminStatisticsPage
