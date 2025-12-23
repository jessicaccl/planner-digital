import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f2f5; 
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .mobile-icon { display: none; }
  .desktop-icon { display: block; }
  
  @media (max-width: 768px) {
    .mobile-icon { display: block; }
    .desktop-icon { display: none; }
  }
`;