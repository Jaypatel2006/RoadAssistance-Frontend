import { useState,useEffect } from 'react'
import './App.css'
import {Card} from "./components/Card.jsx"
import MapComponent from "./components/map.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [another,setanother] = useState(0)
  const [name,setname] = useState("hi")
  const products = [1,2,3,4,5]
  useEffect(()=>{
    console.log("hello")
  },[count])
  function hello(){
    console.log("hello")
  }

  return (
    <>
      <p>hello </p>
      <p className='text-3xl font-bold'> Count : {count} {name}</p>
      <Card name="jay" age={23} handler={hello}/>
      <button onClick={()=>{
        setCount(count+1)
        setname("hello")
      }}> Click to increase</button>
      <button onClick={()=>{
        setanother(another+1)
        setname("hello")
      }}> Click to increase</button>
      {
        products.map((prod,idx)=>(
          <div key={idx}>
            <p>{prod}</p>
          </div>
        ))
      }

      <MapComponent />
      
    </>
    
  )
}



export default App
