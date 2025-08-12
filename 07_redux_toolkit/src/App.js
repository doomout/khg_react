import React from 'react';
import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store';
import { up } from './counterSlice';


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
        //dispatch({type:'counterSlice/up', step:2}); // counterSlice/up 으로 교체
        dispatch(up(2)); // 위 코드를 다음 코드로 축약
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
