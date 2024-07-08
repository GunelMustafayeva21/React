import React, {useRef, useState} from 'react'
import styles from './Timer.module.css'

const Index:React.FC=()=>{


  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
    const startTimer = () => {
      if (timerRef.current !== null) return; 
      timerRef.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    };
  
    const stopTimer = () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    return (
        <div className={styles.timerContainer}>
            <p>{time}</p>
            <div className={styles.btns}>
                <button className={styles.startBtn} onClick={startTimer}>Start</button>
                <button className={styles.stopBtn} onClick={stopTimer}>Stop</button>
            </div>
        </div>
    )
}
export default Index