import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   box-sizing:border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
   --brand-yellow-light: #F1E9C9;
   --brand-purple-light: #EBE5F9;
   --brand-purple-dark: #4B2995;
   --brand-purple: #8047F8;
   --brand-yellow-dark: #C47F17;
   --brand-yellow: #DBAC2C;
   --base-title: #272221;
   --base-text: #574F4D;
   --base-subtitle: #403937;
   --base-label: #8D8686;
   --base-card: #F3F2F2;
   --base-button: #E6E5E5;
   --base-background: #FAFAFA;
  }

  html, body, #id {
   height: 100%;
   width: 100%;
   background-color: var(--base-background);
  } 
`;
