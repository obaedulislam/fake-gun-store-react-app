import AllGun from './components/AllGun/AllGun';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun></AllGun>
    </div>
  );
}

export default App;
