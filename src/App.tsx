import React from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./styles";

import { Header, Wrapper } from "./components";
const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Wrapper></Wrapper>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
