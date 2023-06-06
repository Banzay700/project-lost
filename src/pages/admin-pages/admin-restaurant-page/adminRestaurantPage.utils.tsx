import { SidebarTabItemType } from 'types/ComponentsItemType'
import { IconCreateDish, IconDishes } from 'assets'

export const ROUTES_RESTAURANT = {
  DISHES: 'dishes',
  CREATE_DISH: 'create-dish',
}

export const adminRestaurantPageTabs: SidebarTabItemType[] = [
  {
    linkTo: ROUTES_RESTAURANT.DISHES,
    icon: <IconDishes />,
    label: 'Dishes',
  },
  {
    linkTo: ROUTES_RESTAURANT.CREATE_DISH,
    icon: <IconCreateDish />,
    label: 'Create dish',
  },
]
