import './App.css';
import { useState } from 'react';
import { Text } from './Text';

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

  const [showText, setShowText] = useState(false);

  return (
    <div className='App'>
      <button
        onClick={() =>
          setShowText(!showText)
        }
      >
        Show Text
      </button>

      {showText && <Text />}
    </div >
  )
}

export default App;
