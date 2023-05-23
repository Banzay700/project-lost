import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import { store } from 'store'
import { theme } from 'theme'
import App from './App'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
)
