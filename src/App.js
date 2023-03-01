import React, { useCallback, useMemo, useState } from 'react'
import ExmMemo from './components/ExmMemo';

import './index.css'
import MainPage from './pages/MainPage';

function sum(a,b) {
  return a + b
}

function App() {

  const [value, setValue] = useState('')

  const [math, setMath] = useState({
    a:2,
    b:4
  })

  const log = useCallback((title) => {
    console.log(title)
  }, [])

  const amount = useMemo(() => {
    return sum(math.a, math.b)
  }, [math.a, math.b])

  return (
    <div className="App">
      {/* <input value = {value} onChange = {(e) => setValue(e.target.value)}></input> */}
      <MainPage/>
      {/* <ExmMemo log = {log} amount = {amount}></ExmMemo> */}
    </div>
  );
}

export default App;
