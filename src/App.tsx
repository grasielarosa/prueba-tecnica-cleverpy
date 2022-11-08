import React from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./styles";

import { Dashboard } from "./screens";
const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
