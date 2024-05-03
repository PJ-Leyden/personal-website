import { themeOptions } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import Root from "./common/Home";
import Router from "./Router";

function App() {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
