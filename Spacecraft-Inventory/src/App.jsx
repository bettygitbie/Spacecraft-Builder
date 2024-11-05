import { useState } from 'react'
import SpaceCraftBuilder from './components/SpaceCraftBuilder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <SpaceCraftBuilder />
    </>
  )
}

export default App
