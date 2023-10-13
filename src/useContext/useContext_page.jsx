import React, { useState } from "react"
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent"
import { ThemeProvider } from "./themeContext";

export const ThemeContext = React.createContext();

export default function UseContextAPP(){
   const [darkTheme, setdarkTheme] = useState(true);

   function toggleTheme (){
      setdarkTheme(prevdarkTheme => !prevdarkTheme)
   }

   return(
      <>
      <ThemeProvider>
         {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
         <FunctionContextComponent />
         <hr />
         {/* <ClassContextComponent /> */}

      </ThemeProvider>
      </>
   )
}