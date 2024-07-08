import styles from './Header.module.css'
import {Link} from 'react-router-dom'
import { Urls } from '@/shared/constants/Urls'
import React from 'react'
import { ThemeContext  } from '@/shared/context/Theme'

const Index =()=>{

  const {theme, setTheme} = React.useContext(ThemeContext)
    return (
      <div className={styles.head} style={{backgroundColor:theme}}>
        
        <ul className={styles.navbar}>
            <>
            <Link to={Urls.HOME} className={styles.noneDecoration}>
            <li className={styles.link}>Home</li>
            </Link>
            <Link to={Urls.ABOUT} className={styles.noneDecoration}>
            <li className={styles.link}>About</li>
            </Link>
            <Link to={Urls.SERVICES} className={styles.noneDecoration}>
            <li className={styles.link}>Services</li>
            </Link>
            <Link to={Urls.PRODUCTS} className={styles.noneDecoration}>
            <li className={styles.link}>Products</li>
            </Link>
            </>
            <>
            <li className={styles.link}>Login</li>
            <li className={styles.link}>Register</li>
            <button onClick={()=>{theme==="white"? setTheme("black"):setTheme("white")}} className={styles.themeBtn}>{theme}</button>
            </>
        </ul>

      </div>
    )
  }
  
  export default Index