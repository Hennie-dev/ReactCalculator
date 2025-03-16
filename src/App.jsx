import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [result, setResult] = useState('');

  const clickHandle = (Event) => {
    setResult(result.concat(Event.target.value));
  }

  const clear = () => {
    setResult('');
  }

  const calculateResult = () => {
    setResult(eval(result));
  }

  return (
    <>
      <div className='Calculator'>
        <input type='text' placeholder='0' id='result' value={result}/>
        <input type='button' className='button' value='9' onClick={clickHandle}/>
        <input type='button' className='button' value='8' onClick={clickHandle}/>
        <input type='button' className='button' value='7' onClick={clickHandle}/>
        <input type='button' className='button' value='6' onClick={clickHandle}/>
        <input type='button' className='button' value='5' onClick={clickHandle}/>
        <input type='button' className='button' value='4' onClick={clickHandle}/>
        <input type='button' className='button' value='3' onClick={clickHandle}/>
        <input type='button' className='button' value='2' onClick={clickHandle}/>
        <input type='button' className='button' value='1' onClick={clickHandle}/>

        <input type='button' className='button' value='0' onClick={clickHandle}/>
        <input type='button' className='button' value='+' onClick={clickHandle}/>
        <input type='button' className='button' value='-' onClick={clickHandle}/>
        <input type='button' className='button' value='/' onClick={clickHandle}/>
        <input type='button' className='button' value='*' onClick={clickHandle}/>
        <input type='button' className='button' value='%' onClick={clickHandle}/>

        <input type='button' className='button' value='.' onClick={clickHandle}/>
        <input type='button' className='button end' value='Clear' onClick={clear}/>
        <input type='button' className='button end' value='=' onClick={calculateResult}/>
      </div>  
    </>
  )
}

export default App
