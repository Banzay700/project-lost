export const formControlStyle = {
  borderRadius: '16px',
  '& .MuiInputBase-root': { borderRadius: '16px', color: '#FF5C00' },
  '& .MuiSelect-select': { padding: '12px 16px', borderColor: '#FF5C00' },
}

export const inputLabelStyle = {
  color: '#C2C2C2',
  top: '-3px',
}

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

export const selectStyle = {
  backgroundColor: '#ffffff',
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: '#C2C2C2',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #FFA07A',
  },
}
