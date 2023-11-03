import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App"
import Main from "./components/Main"
import DumWeb from './components/DumWeb'

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path = "/" element ={<App/>}/>
            <Route path = "/about" element ={<Main/>}/>
            <Route exact path = "/dumweb" element ={<DumWeb/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Root