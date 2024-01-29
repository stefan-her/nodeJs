import { useState } from 'react';
import './App.css';
import HelloWorld from './components/hello-world/hello-world';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld firstname='stefan' lastname='her' gender="Y" />
    </>
  )
}

export default App;
