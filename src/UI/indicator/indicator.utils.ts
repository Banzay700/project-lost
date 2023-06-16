type IndicatorContent = {
  color: string
  text: 'Dine in' | 'Take away' | 'Delivery' | 'Available' | 'Reserved' | 'Overdue' | 'default'
}

export const initIndicatorContent = (type: string): IndicatorContent => {
  switch (type) {
    case 'takeAway':
      return { color: '#3395F0', text: 'Take away' }

    case 'dineIn':
      return { color: '#FF5C00', text: 'Dine in' }

    case 'delivery':
      return { color: '#F0B433', text: 'Delivery' }

    case 'available':
      return { color: '#3395F0', text: 'Available' }

    case 'reserved':
      return { color: '#FF5C00', text: 'Reserved' }

    case 'overdue':
      return { color: '#f3362d', text: 'Overdue' }

    default:
      return { color: 'gray', text: 'default' }
  }
}
