import { firstLetterUpperCase } from './firstLetterUpperCase'

export const spacesBetweenCapitalsLetters = (label: string | undefined): string => {
  const transformedLabel = label?.replace(/([A-Z])/g, ' $1').toLowerCase()
  if (!transformedLabel) return ''
  return firstLetterUpperCase(transformedLabel)
}
