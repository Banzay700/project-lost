export const generateArray = (count: number) => {
  const array = []

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    array.push(randomNumber)
  }

  return [...new Set(array)]
}
