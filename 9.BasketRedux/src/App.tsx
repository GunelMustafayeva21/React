
import Header from '@/shared/layout/Header'
import { useAppSelector } from './redux/store'
import Router from '@/pages'
import  './App.css'

function App() {
  const {count}= useAppSelector(state=>state.Counter)
  return (
    <>
     <Header/>
     <Router/>
     <div className='countContainer'>{count}</div>
       
    </>
  )
}

export default App
