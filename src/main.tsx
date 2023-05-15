import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from 'store'
import App from './App'
import './style/index.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
    </StyledEngineProvider>
  </ThemeProvider>,

)
