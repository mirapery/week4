import { useState } from 'react';
import './UseState.css';

const UseState = () => {

  //console.log(useState('light'))

  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
