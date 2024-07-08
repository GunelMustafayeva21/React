import {Routes, Route} from 'react-router-dom'
import { Urls }  from '@/shared/constants/Urls'
import React from 'react'


const Basket=React.lazy(()=>import('@/pages/Basket'))
const Products=React.lazy(()=>import('@/pages/Products'))

const PrivateRoots=()=>{
    return(
        <>
        <Routes>
            <Route element={<Basket/>} path={Urls.BASKET}></Route>
            <Route element={<Products/>} path={Urls.PRODUCTS}></Route>
           
        </Routes>
        </>
    )
}
export default PrivateRoots