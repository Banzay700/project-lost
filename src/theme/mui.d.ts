import { CSSProperties } from 'react'

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    lightGrey?: string
    white?: string
    extraLight?: string
    lightBlue?: string
    blue?: string
    darkRed?: string
    red?: string
    lightRed?: string
    green?: string
    yellow?: string
    gray?: string
  }

  interface Palette {
    border: {
      default: string
      accent: string
      dark: string
      main: string
      white: string
    }
    background: {
      main: string
      accent: string
      gradient: string
      lightMain: string
      lightBlue: string
      lightRed: string
      lightYellow: string
      lightGreen: string
      lightGray: string
    }
  }

  interface TypeBackground {
    main: string
    accent: string
    gradient: string
    lightMain: string
    lightBlue: string
    lightRed: string
    lightYellow: string
    lightGreen: string
    lightGray: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    dashNumb: {
      fontSize: CSSProperties['fontSize']
      fontWeight: CSSProperties['fontWeight']
      lineHeight: CSSProperties['lineHeight']
    }
  }

  interface TypographyVariantsOptions {
    dashNumb?: {
      fontSize: CSSProperties['fontSize']
      fontWeight: CSSProperties['fontWeight']
      lineHeight: CSSProperties['lineHeight']
    }
  }
}

declare module '@mui/material/styles' {
  interface TypeText {
    addition: string
    grey: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dashNumb: true
    h4: false
    h5: false
    h6: false
  }
}
