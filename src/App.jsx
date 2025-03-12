import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Calculator'>
        <input type='text' placeholder='0' id='result'/>
        <input type='button' className='button' value='9' />
        <input type='button' className='button' value='8' />
        <input type='button' className='button' value='7' />
        <input type='button' className='button' value='6' />
        <input type='button' className='button' value='5' />
        <input type='button' className='button' value='4' />
        <input type='button' className='button' value='3' />
        <input type='button' className='button' value='2' />
        <input type='button' className='button' value='1' />

        <input type='button' className='button' value='0' />
        <input type='button' className='button' value='+' />
        <input type='button' className='button' value='-' />
        <input type='button' className='button' value='/' />
        <input type='button' className='button' value='*' />
        <input type='button' className='button' value='%' />

        <input type='button' className='button' value='=' />
        <input type='button' className='button end' value='Clear' />
        <input type='button' className='button end' value='=' />
      </div>  
    </>
  )
}

export default App
