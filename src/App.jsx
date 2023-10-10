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

  console.log("re-Rendered")

  const increment = () => {
    setCount(previousCount =>previousCount + 1)
    setCount(previousCount =>previousCount + 1)
    setCount(previousCount =>previousCount + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <Contact></Contact>
      <button onClick={increment}>Increment Button</button>
    </div>
  )
}

export default App
