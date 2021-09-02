import React from 'react'
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import useCurrentTheme, { ThemeContext } from './themeContext';

const themeValues = {
  Light: {
    backgroundColor: '#fefefe'
  },
  Dark: {
    backgroundColor: '#1C2128'
  }
}

function App() {
  const {currentTheme, setCurrentTheme} = useCurrentTheme()
  return (
    <ThemeProvider theme={themeValues[currentTheme]}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
