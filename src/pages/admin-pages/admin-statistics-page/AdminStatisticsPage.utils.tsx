import { SidebarTabItemType } from 'types/ComponentsItemType'
import { Icon } from 'assets'

export const mokStatistics: SidebarTabItemType[] = [
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
