export interface IndicatorProps {
  type: 'takeAway' | 'dineIn' | 'delivery'
}

type IndicatorContent = {
  color: string
  text: string
}

export const initIndicatorContent = (type: string): IndicatorContent => {
  switch (type) {
    case 'takeAway':
      return {
        color: '#3395F0',
        text: 'Take away',
      }
    case 'dineIn':
      return {
        color: '#FF5C00',
        text: 'Dine in',
      }
    case 'delivery':
      return {
        color: '#F0B433',
        text: 'Delivery',
      }
    default:
      return {
        color: 'gray',
        text: 'default',
      }
  }
}
