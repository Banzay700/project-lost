export function formatString(str: string): string {
  const substrings = []
  let currentSubstring = ''

  for (let i = 0; i < str.length; i += 1) {
    let currentChar = str[i]

    if (currentChar === currentChar.toUpperCase()) {
      if (currentSubstring !== '') {
        substrings.push(currentSubstring)
        currentSubstring = ''
      }
      currentChar = currentChar.toLowerCase()
    }

    currentSubstring += currentChar
  }

  if (currentSubstring !== '') {
    substrings.push(currentSubstring)
  }

  substrings[0] = substrings[0].charAt(0).toUpperCase() + substrings[0].slice(1)

  return substrings.join(' ')
}
