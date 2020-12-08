import React, { useContext } from "react"
import ThemeContext from "../Context/ThemeContext"


const ThemeToggler = ()=>{
    const [themeMode,setThemeMode]= useContext(ThemeContext);

    return (
        <div
        onClick ={()=>{
            setThemeMode(themeMode === "lights"?" Dark ":"light")
        }}
       
    >
    <span>{themeMode==="light"?"Turn Off":"Lights On"}</span> 
        
        </div>

    )

}
export default ThemeToggler;