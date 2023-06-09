import { SidebarTabItemType } from 'types/ComponentsItemType'
import { IconCreateCategory, IconCreateDish, IconDishes } from 'assets'

export const ROUTES_RESTAURANT = {
  DISHES: 'dishes',
  CREATE_DISH: 'create-dish',
  CREATE_CATEGORY: 'create-category',
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
  {
    linkTo: ROUTES_RESTAURANT.CREATE_CATEGORY,
    icon: <IconCreateCategory />,
    label: 'Create Category',
  },
]
