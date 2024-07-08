import React, {useRef} from 'react'
import styles from './ModalManager.module.css'
import tick from '@/assets/img/modal.png'

const Index:React.FC=()=>{

    const modalRef= useRef<HTMLDivElement>(null)
    function displayModal(){
        if(modalRef.current){
            if(modalRef.current.style.display=="block"){
                modalRef.current.style.display="none"
             }
             else{
                modalRef.current.style.display="block"
             }
        }
        
    }
    return (

        <div  className={styles.modalContainer}>
            <div ref={modalRef} className={styles.modal}>
                <img src={tick} alt="" />
                <h1>Thank you!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <button onClick={displayModal} className={styles.modalBtn}>Close Modal</button>
                
            </div>
            <button onClick={displayModal} className={styles.modalBtn}>Open Modal</button>

        </div>

    )
}
export default Index