import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../pages/detail/Detail'
import Login from '../pages/login/Login'


const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:category/search/:keyword' element={<Catalog />}/>
            <Route path='/:category/:id' element={<Detail />}/>
            <Route path='/:category' element={<Catalog />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}

export default MyRoutes
