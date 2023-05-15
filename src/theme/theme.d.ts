import { CSSProperties } from 'react'

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

  // interface Theme {
  //   status: {
  //     danger: React.CSSProperties['color'];
  //   };
  // }
  //
  // interface Palette {
  //   neutral: Palette['primary'];
  // }
  //
  // interface PaletteOptions {
  //   neutral: PaletteOptions['primary'];
  // }
  //
  // interface ThemeOptions {
  //   status: {
  //     danger: React.CSSProperties['color'];
  //   };
  // }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dashNumb: true
    h4: false
    h5: false
    h6: false
  }
}
