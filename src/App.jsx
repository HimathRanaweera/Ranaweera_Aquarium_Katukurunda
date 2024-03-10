import { useState } from 'react'
import {} from 'bootstrap/dist/css/bootstrap.min.css'
import {} from 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import Header from './Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
