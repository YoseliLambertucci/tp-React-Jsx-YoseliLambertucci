import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Component/Button'
import { ItemListContainer } from './Component/ItemListContainer'
import { NavBar } from './Component/NavBar'
import { cartWidget } from './Component/cartWidget'


export function App() {

  return (
  <div className='container'>
    <div>este es un div</div>
    <Button/>
    <cartWidget/>
    <ItemListContainer/>
    <NavBar/>
  </div>

  )
}


