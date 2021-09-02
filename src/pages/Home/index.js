import React from 'react'
import useCurrentTheme from '../../themeContext';
import { Button, Main } from "./style";

export default function Home(){
  const { setCurrentTheme, currentTheme } = useCurrentTheme()
  const clickHandler = () => {
    if(currentTheme === 'Light'){
      return setCurrentTheme('Dark')
    }
    setCurrentTheme('Light')
  }
  return(
    <Main>
      <Button onClick={clickHandler}>
        Change theme for {currentTheme} Mode
      </Button>
    </Main>
  )
}