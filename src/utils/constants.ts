import { MapActionsType } from 'types/GoogleMapsType'

export const ORDER_TOGGLE_MENU_VALUES = [
  { label: 'Order info', value: 'orderInfo' },
  { label: 'Dishes', value: 'dishes' },
]

export const TAX = 10

export const MS_CUSTOM_BREAKPOINT = 690
export const ORIGIN_LAT = 50.44668381698298
export const ORIGIN_LNG = 30.52115934074075
export const GOOGLE_MAP_ID_STYLE = 'b1b2ca9ab1dc851c'
export const MAP_ACTIONS_MODAL_ADDRESS: MapActionsType = {
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  keyboardShortcuts: false,
}
