import { useState, useEffect, useCallback, useMemo } from 'react'
import './App.css'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput]= useState("")

  useEffect(()=>{
    console.log("re-Rendered")    
  },[])
  useEffect( ()=>{
    document.title = input
  },[input])
  const increment = () => {
    setCount(previousCount => previousCount + 1)
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <Contact></Contact>
      <button onClick={increment}>Increment Button</button> <br />
      <input type="text" onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}

export default App
