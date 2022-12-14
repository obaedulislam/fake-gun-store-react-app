import AllGun from './components/AllGun/AllGun';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count+1);
  }
  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGun increaseCount={increaseCount}></AllGun>
      <Footer></Footer>
    </div>
  );
}

export default App;
