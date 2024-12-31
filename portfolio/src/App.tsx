import { useState } from 'react'
import Home from './home/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <p >This is an opening </p>
      <Home/>
    </div>
  )
}

export default App
