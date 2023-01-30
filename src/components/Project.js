import React, { useState } from 'react'
import Header from './Header'
import Cars3000 from '../img/Cars3000.png'
import PizzaOrder from '../img/PizzaOrder.png'
import Drink3000 from '../img/Drink3000.png'
import Movieshuffle from '../img/Movieshuffle.png'

const Project = () => {
  const [project, setProject] = useState (
    {
      titre : "Cars3000",
      image : {Cars3000}
    },
    {
      titre : "PizzaOrder",
      image : {PizzaOrder}
    },
    {
      titre : "Drink3000",
      image : {Drink3000}
    },
    {
      titre : "Movieshuffle",
      image : {Movieshuffle}
    }
  )
  return (
    <div className='container'>
      <Header/>
      <div className="element">
        <h2>Titre</h2>
        <button className='details'>Détails</button>
      </div>
    </div>
  )
}

export default Project