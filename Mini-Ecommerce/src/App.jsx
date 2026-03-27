import React from 'react'

// components
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Products } from './components/Products'

// styles
import './styles/App.css'

export const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Products />
    </>
  )
}
