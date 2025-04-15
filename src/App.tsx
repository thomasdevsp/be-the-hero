import { BrowserRouter } from "react-router"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/themes/global"
import { AppContextProvider } from "./context/AppContextProvider"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  )
}
