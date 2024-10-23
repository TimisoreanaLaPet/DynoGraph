import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {useMemo} from "react";
import {themeSettings} from "./theme/theme.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import {useAppSelector} from "./state/store.ts";

function App() {
  const mode = useAppSelector(state => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
