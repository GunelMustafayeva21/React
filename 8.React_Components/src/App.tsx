import './App.css'
import Form from '@/shared/components/Form'
import Timer from '@/shared/components/Timer'
import ThemeSwitcher from '@/shared/components/ThemeSwitcher'
import AudioPlayer  from '@/shared/components/AudioPlayer'
import ModalManager from '@/shared/components/ModalManager' 


function App() {
 
  return (
    <>
   <Form/>
   <ThemeSwitcher/>
   <AudioPlayer/>
   <ModalManager/>
   <Timer/>
   </>
  )
}

export default App
