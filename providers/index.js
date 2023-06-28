import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

export default function ThemeProviderMui5({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
