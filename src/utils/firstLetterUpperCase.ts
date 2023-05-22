export const correctionRouteLinkForRequest = (str: string) => {
  const result = str.slice(1)
  return result[0].toUpperCase() + result.slice(1)
}
