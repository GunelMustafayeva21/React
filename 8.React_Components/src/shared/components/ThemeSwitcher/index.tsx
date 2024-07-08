import React, { useState } from 'react'
import styles from './ThemeSwitcher.module.css'
const Index: React.FC = () => {
    const dark= "black";
    const light="white";
    const [Theme, setTheme] = useState<string>(light);
    return (

        <div style={{background:Theme}} className={styles.container}>

            <button onClick={()=>{setTheme(dark)}} className={styles.changeModeBtn}>Dark Mode</button>
            <button onClick={()=>{setTheme(light)}} className={styles.changeModeBtn}>Light Mode</button>

        </div>


    )

}

export default Index;