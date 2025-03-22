import { useState,useEffect } from 'react'
import './App.css'
import MapComponent from './components/map.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <p>hello </p>
      <p className='text-3xl font-bold'> Count : {count} {name}</p>
      <button onClick={()=>{
        setCount(count+1)
        setname("hello")
      }}> Click to increase</button>
      <button onClick={()=>{
        setanother(another+1)
        setname("hello")
      }}> Click to increase</button>

      <MapComponent />
      
    </>
    
  )
}



export default App
