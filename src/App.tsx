import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='App' style={{ backgroundColor: 'red' }}>
      <Counter count={count} />
      <div>
        <button onClick={handleIncrement} style={{ backgroundColor: 'green' }}>+</button>
        <button onClick={handleDecrement} style={{ backgroundColor: 'green' }}>-</button>
      </div>
    </div>
  );
}

export default App;
