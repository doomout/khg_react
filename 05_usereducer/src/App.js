import logo from './logo.svg';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  function down() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  function up() {
    setCount(count + 1);
  }
  return (
    <div>
      <input type='button' value="-" onClick={down} />
      <input type='button' value="0" onClick={reset} />
      <input type='button' value="+" onClick={up} />
      <p><span>{count}</span></p>
    </div>
  );
}

export default App;
