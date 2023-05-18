const stringToColor = (string: string): string => {
  let hash = 0
  let i
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = '#'
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */
  return color
}

export const stringAvatar = (username: string) => {
  return {
    sx: {
      bgcolor: stringToColor(username),
      width: '44px',
      height: '44px',
    },
    children: `${username.split(' ')[0][0]}${username.split(' ')[1][0]}`,
  }
}
