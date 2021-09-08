import React, { useState } from "react";

import { Button, Main } from "./styles";
import { ThemeProvider } from "styled-components"; 
const themeValues = {
  Light: {
    backgroundColor: '#fefefe'
  },
  Dark: {
    backgroundColor: '#1C2128'
  }
}

function App() {
  const [ currentTheme, setCurrentTheme] = useState('Light') // Light, ou Dark
  
  function handleClick(){
    if(currentTheme === 'Dark')
      return setCurrentTheme('Light')
    return setCurrentTheme('Dark')
  }
  return (
    <ThemeProvider theme={themeValues[currentTheme]}>
    <Main>
      <Button onClick={handleClick}>
        Clique aqui para trocar o tema
      </Button>
    </Main>
    </ThemeProvider>
  );
}

export default App;

