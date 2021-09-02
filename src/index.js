import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { ThemeContext } from './themeContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>,
  document.getElementById('root')
);
