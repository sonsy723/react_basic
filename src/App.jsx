import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './component/style.css'

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1)
  };
  const minusCount = () => {
    setCount(count-1)
  };
  const resetCount = () => {
    setCount(0)
  };

  return (
    <>
      <div className='count-div'>
        <h1>{count}</h1>
        <button onClick={minusCount}>-</button>
        <button onClick={addCount}>+</button>
        <button onClick={resetCount}>reset</button>
     </div>
    </>
  )
}

export default App
