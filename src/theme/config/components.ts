export const components = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        dashNumb: 'p',
      },
    },
  },
  MuiStack: {
    defaultProps: {
      borderColor: '#E4E4E4',
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        ':focus': {
          outline: 'none',
        },
      },
      containedSecondary: {
        '&.Mui-disabled': {
          background: '#E4E4E4',
          color: '#9C9C9C',
        },
      },
      containedPrimary: {
        '&.Mui-disabled': {
          opacity: '0.6',
          background: '#FF5C00',
          color: '#FFFFFF',
        },
      },
      outlinedSecondary: {
        border: '1px solid #E4E4E4',
      },
    },
    defaultProps: {
      disableRipple: true,
      disableFocusRipple: true,
      disableElevation: false,
    },
  },
}
