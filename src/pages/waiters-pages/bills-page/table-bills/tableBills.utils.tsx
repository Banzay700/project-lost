import { FilterMenuItemType, IndicatorItemType } from 'types/ComponentsItemType'

export const tableTitleBills: string[] = [
  'Table Number',
  'Order Number',
  'Total Price',
  'Status',
  'Order Type',
  'Actions',
]

export const tableIndicatorBills: IndicatorItemType[] = [
  {
    label: 'Dine in',
    type: 'primary',
  },
  {
    label: 'Take away',
    type: 'blue',
  },
  {
    label: 'Delivery',
    type: 'yellow',
  },
]

export const tableFilterMenuItem: FilterMenuItemType[] = [
  { value: 'delivery', label: 'Delivery' },
  { value: 'dineIn', label: 'Dine in' },
  { value: 'takeAway', label: 'Take away' },
]
