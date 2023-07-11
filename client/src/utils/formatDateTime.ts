export const formatDateTime = (date: Date): string => {
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const dateString = date.toLocaleDateString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  return `${time} ${dateString}`
}
