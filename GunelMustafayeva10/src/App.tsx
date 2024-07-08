// import useFetch from '@/shared/hooks/useFetch'
//import {useState} from 'react'
// import Reducer from '@/shared/components/Reducer'
// import Todo from '@/shared/components/Todo'
// import RenderIf from '@/shared/components/RenderIf'
// import Services from '@/pages/Services'

import {Header, Footer} from '@/shared/Layout'
import Router from '@/pages'


function App() {

  // const { isLoading, isError, data } = useFetch({ link: "https://jsonplaceholder.org/users" })
  // const [renderService, setRenderService]= useState<boolean>(false)
  return (
    <>
      {/* <Reducer />
      <Todo />
      <button onClick={()=>setRenderService(!renderService)}>Hide Users and Show Services</button>
      <RenderIf condition={!renderService}>
      <RenderIf condition={isLoading}>
        <p>Loading...</p>
      </RenderIf>
      <RenderIf condition={isError}>
        <p>Error...</p>
      </RenderIf>
      <RenderIf condition={!isError ?? !isLoading ?? data.length}>
        {
          data?.map(user => (
            <p>
              {user.firstname} {user.lastname}
            </p>
          ))
        }
      </RenderIf>
      </RenderIf>
     
      
      <RenderIf condition={renderService}>
        <Services/>
      </RenderIf> */}

      <Header/>
      <Router/>
      <Footer/>
      
      
    </>
  )
}

export default App
