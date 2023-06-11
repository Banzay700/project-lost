import { useParams } from 'react-router-dom'
import { FC } from 'react'
import { SidebarTabsList } from 'components'
import { SidebarTabItemType } from 'types'
import { Icon } from 'assets'
import { useRelocateDefaultLocation } from 'hooks'

const mokStatistics: SidebarTabItemType[] = [
  {
    linkTo: 'sales',
    icon: <Icon.Sales />,
    label: 'Sales',
  },
  {
    linkTo: 'marketing',
    icon: <Icon.Marketing />,
    label: 'Marketing',
  },
  {
    linkTo: 'business-summary',
    icon: <Icon.Summary />,
    label: 'Business Summary',
  },
  {
    linkTo: 'saved-reports',
    icon: <Icon.SavedReports />,
    label: 'Saved Reports',
  },
  {
    linkTo: 'feedbacks',
    icon: <Icon.Feedbacks />,
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
      titleIcon={<Icon.Statistics />}
    />
  )
}

export default AdminStatisticsPage
