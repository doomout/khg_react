import React from 'react';
import './App.css';
import {createStore} from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux';

// 리듀서 정의
function reducer(state, action) {
  // up 이라는 타입의 클릭 이벤트가 발생하면.
  if(action.type === 'up') {
    // 기존 값을 복사하고, 값을 증가 시킨 뒤 출력
    return {...state, value:state.value + action.step}
  }
  return state;
}
createStore(reducer);

//초기값 만들고 0으로 설정
const initialState = {value:0}
const state = createStore(reducer, initialState);

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.value);
  return (
    <div>
      <button onClick={()=>{ //버튼 클릭시 숫자가 2씩 증가하도록 dispatch 설정
        dispatch({type:'up', step:2});
      }}>+</button> {count}
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
