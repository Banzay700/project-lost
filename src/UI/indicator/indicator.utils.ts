export interface IndicatorProps {
  type: 'takeAway' | 'dineIn' | 'delivery'
}

type IndicatorContent = {
  color: string
  text: string
}

export const initIndicatorContent = (type: string): IndicatorContent => {
  if (type === 'takeAway') {
    return {
      color: '#3395F0',
      text: 'Take away',
    }
  }

  if (type === 'dineIn') {
    return {
      color: '#FF5C00',
      text: 'Dine in',
    }
  }

  if (type === 'delivery') {
    return {
      color: '#F0B433',
      text: 'Delivery',
    }
  }

  return {
    color: 'gray',
    text: 'default',
  }
}
