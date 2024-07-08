import {Routes, Route} from 'react-router-dom'
import { Urls }  from '@/shared/constants/Urls'
import React from 'react'
// Normal Imports
// import Home from '@/pages/Home'
// import About from '@/pages/About'
// import Services from '@/pages/Services'

//Lazy Imports: When you need page then it will come not at the beginning

const Home=React.lazy(()=>import('@/pages/Home'))
const About=React.lazy(()=>import('@/pages/About'))
const Services=React.lazy(()=>import('@/pages/Services'))
const Products=React.lazy(()=>import('@/pages/Products'))
const Product=React.lazy(()=>import('@/pages/Products/Product'))
const PrivateRoots=()=>{
    return(
        <>
        <Routes>
            <Route element={<Home/>} path={Urls.HOME}></Route>
            <Route element={<About/>} path={Urls.ABOUT}></Route>
            <Route element={<Services/>} path={Urls.SERVICES}></Route>
            <Route element={<Products/>} path={Urls.PRODUCTS}></Route>
            <Route element={<Product/>} path={`${Urls.PRODUCTS}/:id`}></Route>
        </Routes>
        </>
    )
}
export default PrivateRoots