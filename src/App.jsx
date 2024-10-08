import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
  <>  <div>
    <div style={{backgroundColor:'black' , fontSize:'55px',color:'white', fontStyle:'bold',borderRadius:'3px'} }>
      Count:{count}
    </div>
    <div><button onClick={handleClick}>Increment</button></div>
  </div>
  <div>
    <ChildComponent buttonName='Click Me'/>
  </div>
  </>

  )

}

export default App
