import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle``;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
