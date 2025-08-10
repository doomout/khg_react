import './App.css';
// Redux에서 스토어 생성 함수 불러오기
import { createStore } from 'redux';
// React-Redux에서 스토어를 React 컴포넌트에 연결하기 위한 도구들 불러오기
import { Provider, useSelector, useDispatch } from 'react-redux';

// -------------------------
// 리듀서 함수 정의
// -------------------------
// currentState: 현재 상태 값
// action: 상태를 어떻게 바꿀지에 대한 '요청 객체'
function reducer(currentState, action) {
  // 스토어가 처음 만들어질 때 상태값이 없으므로 초기 상태를 지정
  if (currentState === undefined) {
    return {
      number: 1, // 초기값
    };
  }

  // 기존 상태를 복사 (불변성 유지)
  const newState = { ...currentState };

  // action의 type이 'PLUS'면 number 값을 1 증가
  if (action.type === 'PLUS') {
    newState.number++;
  }

  // 변경된 상태 반환
  return newState;
}

// -------------------------
// 스토어 생성
// -------------------------
const store = createStore(reducer);

// -------------------------
// App 컴포넌트
// -------------------------
function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        {/* Provider로 감싸서 store를 하위 컴포넌트에서 사용 가능하게 함 */}
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

// -------------------------
// 왼쪽 영역 컴포넌트
// -------------------------
function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}

function Left2() {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

function Left3() {
  // store에 있는 number 값을 꺼내오기
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h1>Left3: {number}</h1>
    </div>
  );
}

// -------------------------
// 오른쪽 영역 컴포넌트
// -------------------------
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

function Right3() {
  // dispatch 함수를 가져와서 액션을 발생시킬 수 있게 함
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      {/* 버튼 클릭 시 'PLUS' 액션을 디스패치해서 상태 변경 */}
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      />
    </div>
  );
}

export default App;
