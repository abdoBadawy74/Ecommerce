import ToggleBar from "./Components/header/ToggleBar";
import TopBar from "./Components/header/TopBar";
import SearchBar from "./Components/header/SearchBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <TopBar />
          <SearchBar />
          <ToggleBar />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
