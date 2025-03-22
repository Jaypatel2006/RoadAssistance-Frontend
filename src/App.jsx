import { useState,useEffect } from 'react'
import './App.css'
import MapComponent from './components/map.jsx'
import Nav from './components/nav.jsx'
import ServicesPage from './components/services.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      
      <Nav/>
      <ServicesPage/>
    </>
    
  )
}



export default App
