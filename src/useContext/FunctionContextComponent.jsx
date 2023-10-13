import React, { useContext } from "react"
import { ThemeContext } from "./useContext_page"

function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem', margin: '2ren'
    }
    return (
        <div style={themeStyles}>Function Theme</div>
    )
}

export default FunctionContextComponent