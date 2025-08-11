import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider, useSelector} from 'react-redux';

// 리듀서 정의
function reducer(state, action) {
  return state;
}
createStore(reducer);

//초기값 만들고 0으로 설정
const initialState = {value:0}
const state = createStore(reducer, initialState);

function Counter() {
  const count = useSelector(state => state.value);
  return (
    <div>
      <button>+</button> {count}
    </div>
  );
}
function App() {
  return (
    <Provider store={state}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
