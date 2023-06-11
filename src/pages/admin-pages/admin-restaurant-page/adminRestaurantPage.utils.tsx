import { SidebarTabItemType } from 'types'
import { Icon } from 'assets'

export const ROUTES_RESTAURANT = {
  DISHES: 'dishes',
  CREATE_DISH: 'create-dish',
}

export const adminRestaurantPageTabs: SidebarTabItemType[] = [
  {
    linkTo: ROUTES_RESTAURANT.DISHES,
    icon: <Icon.Dishes />,
    label: 'Dishes',
  },
  {
    linkTo: ROUTES_RESTAURANT.CREATE_DISH,
    icon: <Icon.CreateDish />,
    label: 'Create dish',
  },
]
