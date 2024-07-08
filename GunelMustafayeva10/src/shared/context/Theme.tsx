import React from 'react'

interface ITheme{
    children:React.ReactNode
}
interface IThemeContext{ 
    theme: Color
    setTheme: React.Dispatch<React.SetStateAction<Color>>
}
type Color="white" | "black"

export const ThemeContext=React.createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider=({children}:ITheme)=>{

    const [theme, setTheme]= React.useState<Color>(()=>{
        const localTheme= localStorage.getItem("theme") as Color?? null;
        return localTheme ? localTheme : "white";
    });

    React.useEffect(()=>{
         localStorage.setItem("theme", theme)
    }, [theme])
     
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider