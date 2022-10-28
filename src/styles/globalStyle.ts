import { createGlobalStyle } from "styled-components";
import { device } from "./devicesSizes";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

*::before, *::after {
  box-sizing: border-box;
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueCleverpy};
}

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blueCleverpy};
    max-width: 100vw;
    -webkit-font-smoothing: antialised;
    -webkit-overflow-scrolling: touch;
  }
  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem; 
  }

  h1 {
    font: 700 3.125rem / 3.8rem  'Work Sans', sans-serif;
  }

  h2 {
    font: 400 2,75rem / 3.3rem 'Work Sans', sans-serif;
  }

  h3 {
    font: 400 2,375rem / 2.9rem 'Work Sans', sans-serif;
  }

  h4 {
    font: 400 2rem / 2.42rem 'Work Sans', sans-serif;
  }

  h5 { 
    font: 400 1.65rem / 1.96rem  'Work Sans', sans-serif;
  }

  h6 { 
    font: 400 1.25rem / 1.51rem  'Work Sans', sans-serif;
  }

  p {
    font: 400 1.12rem / 1.51rem 'Poppins', sans-serif;
  }

  label {
    font: 400 1rem / 1.20rem  'Poppins', sans-serif;
  }

  input {
  all: unset;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: all 15000s ease-in-out 0s;
} 

/* ::-webkit-scrollbar {display:none;} */


 @media (${device.tablet}) {
    html {
      font-size: 87.5%;
    }
  }
  `;
