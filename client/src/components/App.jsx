import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import Layout from 'components/Layout/Layout'
import Routes from 'routes/Routes'
import { GlobalStyle } from 'styles/GlobalStyle'
import { darkTheme, lightTheme } from 'styles/themes'

export const ThemeContext = React.createContext(null)

export const App = () => {
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Caja Notarial</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <>
          <Layout>
            <Routes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
