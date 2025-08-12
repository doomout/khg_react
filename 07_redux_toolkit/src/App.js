import React from 'react';
import './App.css';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {createSlice, configureStore} from '@reduxjs/toolkit';

//슬라이스 정의
const counterSlice = createSlice({
  name:'counterSlice', // 슬라이스 이름
  initialState:{value:0}, // 초기값
  reducers:{// 리듀서(복수형)
    up:(state, action)=>{
      state.value = state.value + action.step;
    }
  } 
});

// 여러개의 슬라이스를 모아서 스토어를 만들 때 
const store = configureStore({
  reducer:{ //리듀서(단수형)
    counter:counterSlice.reducer
  }
});

/* 슬라이스로 대체 함
// 리듀서 정의
function reducer(state, action) {
  // up 이라는 타입의 클릭 이벤트가 발생하면.
  if(action.type === 'up') {
    // 기존 값을 복사하고, 값을 증가 시킨 뒤 출력
    return {...state, value:state.value + action.step}
  }
  return state;
}

//초기값 만들고 0으로 설정
const initialState = {value:0}
const state = createStore(reducer, initialState);
*/

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  return (
    <div>
      <button onClick={()=>{ //버튼 클릭시 숫자가 2씩 증가하도록 dispatch 설정
        //dispatch({type:'up', step:2});
        dispatch({type:'counterSlice/up', step:2}); // 기존 up을 counterSlice/up 으로 교체
      }}>+</button> {count}
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
