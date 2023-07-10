import { SidebarTabItemType } from 'types/ComponentsItemType'
import { Icon } from 'assets'

export const ROUTES_STATISTICS = {
  SALES: 'sales',
  MARKETING: 'marketing',
  BUSINESS_SUMMARY: 'business-summary',
  SAVED_REPORTS: 'saved-reports',
  FEEDBACKS: 'feedbacks',
}

export const adminStatisticsPageTabs: SidebarTabItemType[] = [
  {
    linkTo: ROUTES_STATISTICS.SALES,
    icon: <Icon.Sales />,
    label: 'Sales',
  },
  {
    linkTo: ROUTES_STATISTICS.MARKETING,
    icon: <Icon.Marketing />,
    label: 'Marketing',
  },
  {
    linkTo: ROUTES_STATISTICS.BUSINESS_SUMMARY,
    icon: <Icon.Summary />,
    label: 'Business Summary',
  },
  {
    linkTo: ROUTES_STATISTICS.SAVED_REPORTS,
    icon: <Icon.SavedReports />,
    label: 'Saved Reports',
  },
  {
    linkTo: ROUTES_STATISTICS.FEEDBACKS,
    icon: <Icon.Feedbacks />,
    label: 'Feedbacks',
  },
]
