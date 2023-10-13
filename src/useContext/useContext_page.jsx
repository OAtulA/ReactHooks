import React, { useState } from "react"
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent"

export const ThemeContext = React.createContext();

export default function UseContextAPP(){
   const [darkTheme, setdarkTheme] = useState(true);

   function toggleTheme (){
      setdarkTheme(prevdarkTheme => !prevdarkTheme)
   }

   return(
      <>
      <ThemeContext.Provider value={darkTheme}> 
         <button onClick={toggleTheme}>Toggle Theme</button>
         <FunctionContextComponent />
         <hr />
         <ClassContextComponent />

      </ThemeContext.Provider>
      </>
   )
}