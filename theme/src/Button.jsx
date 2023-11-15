import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
function Button(props){
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <button onClick={toggleTheme}
        className={`${color}Theme`}>
            Change Theme
        </button>
    )
}
export default Button