import './App.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

// currentState: 현재의 상태 값, action: 현재의 값을 어떻게 바꿀 것인지 결정하는 요청
function reducer(currentState, action) {
  // 스테이트가 정의되지 않았으면 기본값 1을 지정
  if(currentState === undefined) 
  {
    return {
      number: 1,
    };
  }
  const newState = {...currentState}; // 복사
  return newState;
}
const store = createStore(reducer);

function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}


function Left3(props) {
  function f(state) {
    return state.number;
  }
  const number = useSelector((state)=>state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}

function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{}} />
    </div>
  );
}


export default App;
