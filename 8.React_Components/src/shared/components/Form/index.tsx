import React, {useState} from 'react'
import styles from './Form.module.css'
const Index:React.FC=()=>{

    const [Name, setName] = useState<string>("");
    const [Email, setEmail] = useState<string>("");
    return (
    
        <form action="" className={styles.container}>
          <input type="text" className={styles.inputForName} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
          <input type="text" className={styles.inputForEmail} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <button onClick={(e)=>{
            e.preventDefault()
            console.log(`Name of user is ${Name} and email is ${Email}`)
          }} className={styles.submitBtn}> Submit</button>
        </form>
       
    )

}

export default Index;