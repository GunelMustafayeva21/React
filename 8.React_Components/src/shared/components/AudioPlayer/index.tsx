import React, {useRef} from "react";
import styles from './AudioPlayer.module.css'

const Index:React.FC=()=>{

    const audioRef= useRef<HTMLAudioElement>(null)
    const inputRef=useRef<HTMLInputElement>(null) 

    function increaseSpeed(speed:number){
        if(audioRef.current){
            console.log(audioRef.current.playbackRate)
            audioRef.current.playbackRate= speed;
        }
    }
    function changeTime(time:number){
        if(audioRef.current){
            audioRef.current.currentTime=audioRef.current.currentTime+time;
        }
    }
    function defineSpeed(){
        if(Number(inputRef.current?.value)<0 || Number(inputRef.current?.value)>16 ){
           alert("Speed can be minimum1 maximum 16 ");
        }
        
         if(audioRef.current){
         console.log(audioRef.current.playbackRate)
         audioRef.current.playbackRate=Number(inputRef.current?.value)
         console.log(audioRef.current.playbackRate)
        }
    }
    return (
        <div className={styles.audioContainer}>
        <div>
        <audio ref={audioRef} src="https://mp3.big.az/uplarx/ag1519676606_d41d8cd98f.mp3?st=qz3KXCUeh5BEQzIZKFHAUQ&e=1719747098&pEgeSdasi=1&vPxaKd5H8rVZpADFsUP=mp3-688129.mp3" controls  >
        </audio>
        </div>
        <div className={styles.buttons}>
            <button onClick={()=>{changeTime(-10)}} className={styles.btn} >10 saniyə geri </button>
            <button onClick={()=>{changeTime(10)}} className={styles.btn}>10 saniyə irəli</button>
            <button onClick={()=>{increaseSpeed(3)}} className={styles.btn}>3x sürət</button>
            <button onClick={()=>{increaseSpeed(4)}} className={styles.btn}>4x sürət</button>
            <input  ref={inputRef} className={styles.speedInput} type="number" placeholder="Sürəti daxil edin" />
            <button onClick={defineSpeed} className={styles.btn}>Təsdiq edin</button>
        </div>
        
        </div>
    )
}

export default Index