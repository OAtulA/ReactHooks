import React, { useContext, useState } from "react";

const ThemeContext = React.createContext()
export const ThemeUpdateContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext)
}
// Its value is toggleTheme function
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setdarkTheme] = useState(true);

    function toggleTheme() {
        setdarkTheme(prevdarkTheme => !prevdarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme} >
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}