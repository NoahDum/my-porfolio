import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "./App"
import About from './components/About'
import Project from './components/Project'
import Skill from './components/Skill'

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path = "/" element ={<App/>}/>
            <Route path = "/about" element ={<About/>}/>
            <Route exact path = "/project" element ={<Project/>}/>
            <Route exact path = "/skill" element ={<Skill/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Root