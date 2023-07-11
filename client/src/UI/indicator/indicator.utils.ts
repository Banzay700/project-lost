export const initIndicatorContent = (type?: string) => {
  switch (type) {
    case 'blue':
      return '#3395F0'
    case 'primary':
      return '#FF5C00'
    case 'yellow':
      return '#F0B433'
    case 'red':
      return '#f3362d'
    case 'green':
      return '#1DCD00'
    default:
      return 'gray'
  }
}
