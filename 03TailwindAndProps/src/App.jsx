import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-500'>Nishant Kumar bhadani</h1>
      <Card title="Nishant Kumar"/>
      <Card title="Manish Kumar" btnTxt="click me"/>

    </>
  )
}

export default App
