import PrivateRoutes from './PrivateRoots'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import RenderIf from '@/shared/components/RenderIf'
import {Urls} from '@/shared/constants/Urls'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const Router=()=>{

    const userIsValid=true;

    return (
        <>
        <React.Suspense fallback={<h1>Coming... Just wait a little bit</h1>}>
        <RenderIf condition={userIsValid}>
        <PrivateRoutes/>
        </RenderIf>
        </React.Suspense >
        
        <RenderIf condition={!userIsValid}>
        <Routes>
            <Route element={<Login/>} path='*'></Route>
            <Route element={<Login/>} path={Urls.LOGIN}></Route>
            <Route element={<Register/>} path={Urls.REGISTER}></Route>
        </Routes>
        </RenderIf>
        </>
      
    )
}

export default Router