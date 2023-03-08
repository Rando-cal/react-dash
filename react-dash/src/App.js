import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/materials"

function App() {
  const [theme, colorMode] = useMode();


  // this setups color context and have access to it globally
  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* resets css to defaults */}
        <CssBaseline /> 
        <div className="app">
          <main className="content"> </main>
        </div>
      </ThemeProvider>
      </ColorModeContext.Provider>

  );
}

export default App;