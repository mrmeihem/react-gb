import "./App.scss";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider, Container } from "@material-ui/core";
import { Routes } from "./components/Routes";

import { Provider } from "react-redux";
import { store } from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    text: {
      primary: "#333",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Container maxWidth="md">
            <Routes />
          </Container>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
