import logo from './logo.svg';
import React, {useReducer, useState} from 'react';

function App() {
  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if(action.type === 'UP') {
      return oldCount + action.number;
    } else if(action.type === 'DOWN') {
      return oldCount - action.number;
    } else if(action.type === 'RESET') {
      return 0;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({type: 'DOWN', number: number});
  }
  function reset() {
    countDispatch({type: 'RESET', number: number});
  }
  function up() {
    countDispatch({type: 'UP', number: number});
  }

  function changNumber(event) {
    setNumber(Number(event.target.value));
  }
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <p><input type="text" value={number} onChange={changNumber} /></p>
      <p><span>{count}</span></p>
    </div>
  );
}

export default App;
