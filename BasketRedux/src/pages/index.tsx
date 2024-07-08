import PrivateRoutes from './PrivateRoots'
import React from 'react'



const Router=()=>{



    return (
        <>
        <React.Suspense fallback={<h1>Coming... Just wait a little bit</h1>}>
        
        <PrivateRoutes/>
     
        </React.Suspense >
        
        
       
        </>
      
    )
}

export default Router