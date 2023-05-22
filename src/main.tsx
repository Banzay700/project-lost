import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import { store } from 'store'
import { theme } from 'theme'
import AppRouter from './AppRouter'
import './style/index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <AppRouter />
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
)
