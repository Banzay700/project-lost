export const menuItemsStyle = {
  '&.MuiMenuItem-root': {
    borderRadius: '16px',
    margin: '6px 8px',
    border: '1px solid #E4E4E4',
  },
  '&.Mui-selected': {
    backgroundColor: '#FFF5EE',
    border: '1px solid #FFA07A',
    color: '#FFA07A',
  },
}

export const selectActiveStyle = {
  color: '#FF5C00',
  backgroundColor: '#FFF5EE',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: '#FF5C00',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #FFA07A',
  },
}

export const selectDefaultStyle = {
  color: '#828487',
  backgroundColor: '#ffffff',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: '#C2C2C2',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #FFA07A',
  },
}
