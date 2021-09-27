import "./App.scss";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider, Container } from "@material-ui/core";
import { Routes } from "./components/Routes";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

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
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Container maxWidth="md">
              <Routes />
            </Container>
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
