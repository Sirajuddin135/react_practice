import './App.css';
// import { User } from './User';
// import { Planet } from './Planets';
import { useState } from 'react';

function App() {

  // CSS, Ternary Operator
  // let isTextColorful = true;
  // let isButtonPresent = false;

  // return (
  //   <div className='App'>
  //     <h1 style={{ color: isTextColorful ? "green" : "red" }}>This text is colorful</h1>
  //     {isButtonPresent && <button>This is a button</button>}
  //   </div >
  // );

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <div className='App'>
      <button onClick={increaseCount}>Increase Count</button>

      <button onClick={decreaseCount}>Decrease Count</button>

      <button onClick={() => {
        setCount(0);
      }}>
        Set Count to Zero
      </button>

      {count}
    </div >
  )
}

export default App;
