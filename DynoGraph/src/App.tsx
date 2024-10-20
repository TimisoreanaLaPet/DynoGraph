import {createTheme, ThemeProvider} from "@mui/material";
import {useMemo} from "react";
import {themeSettings} from "./theme/theme.ts";
import TopBar from "./components/TopBar.tsx";

function App() {
  const mode = 'dark'
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        hello world
        <TopBar/>
      </ThemeProvider>
    </div>
  )
}

export default App
