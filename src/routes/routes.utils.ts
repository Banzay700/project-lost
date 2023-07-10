export const ROUTES = {
  HOME: '/',
  PROFILE: 'profile',
}

export const ROUTES_WAITER = {
  DISHES: 'home',
  DISHES_CATEGORY: ':category',
  ORDERS: 'orders',
  BILLS: 'bills',
  RESERVATION: 'reservation',
}

export const ROUTES_ADMIN = {
  DASHBOARD: 'admin',
  STATISTICS: 'statistics',
  STATISTICS_CATEGORY: ':statistics',
  RESTAURANT: 'restaurant',
  RESTAURANT_CATEGORY: ':restaurant',
  EMPLOYEES: 'employees',
  EMPLOYEES_CATEGORY: ':employees',
}

export const ROUTES_DELIVERY = {
  DELIVERY: 'delivery',
  CURRENT_ORDER: '/delivery/:currentOrder',
  ORDERS: 'active-orders',
  HISTORY: 'history',
  HISTORY_ORDER: '/history/:historyOrder',
  ACTIVE_ORDER: '/active-orders/:activeOrder',
  DIRECTION: '/direction',
}

export const ROUTES_NOT_AUTH = {
  LOGIN: 'login',
}
