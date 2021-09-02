import React from "react";
import { createContext, useContext, useState } from "react"

const context = createContext()

export function ThemeContext({children}){
  const [currentTheme, setCurrentTheme] = useState('Light');
  return(
    <context.Provider value={{
      currentTheme,
      setCurrentTheme
    }}>
      {children}
    </context.Provider>
  )
}

export default function useCurrentTheme(){
  const {setCurrentTheme, currentTheme} = useContext(context)

  return {
    setCurrentTheme, currentTheme
  }
}