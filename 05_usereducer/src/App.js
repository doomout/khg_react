import React, { useReducer, useState } from 'react'; // React와 useState, useReducer 훅 불러오기

function App() {
  // number 상태: 사용자가 입력한 숫자 (증가/감소할 단위)
  const [number, setNumber] = useState(1);

  // countReducer: useReducer에 전달되는 reducer 함수
  // 현재 count 상태(oldCount)와 action 객체를 받아서, 새로운 상태를 반환
  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number; // UP: count에 number를 더함
    } else if (action.type === 'DOWN') {
      return oldCount - action.number; // DOWN: count에서 number를 뺌
    } else if (action.type === 'RESET') {
      return 0; // RESET: count를 0으로 초기화
    }
  }

  // useReducer를 사용해서 count 상태 관리
  // count는 현재 값, countDispatch는 상태 변경을 위한 dispatch 함수
  const [count, countDispatch] = useReducer(countReducer, 0); // 초기 count 값은 0

  // 감소 버튼 클릭 시 호출: 'DOWN' 타입 액션을 dispatch
  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }

  // 리셋 버튼 클릭 시 호출: 'RESET' 타입 액션을 dispatch
  function reset() {
    countDispatch({ type: 'RESET', number: number });
  }

  // 증가 버튼 클릭 시 호출: 'UP' 타입 액션을 dispatch
  function up() {
    countDispatch({ type: 'UP', number: number });
  }

  // 숫자 입력창 변경 시 호출: 입력값을 number 상태에 저장
  function changNumber(event) {
    setNumber(Number(event.target.value)); // 문자열을 숫자로 변환해서 저장
  }

  // 화면에 표시되는 UI 구성
  return (
    <div>
      {/* - 버튼: count 감소 */}
      <input type="button" value="-" onClick={down} />

      {/* 0 버튼: count 초기화 */}
      <input type="button" value="0" onClick={reset} />

      {/* + 버튼: count 증가 */}
      <input type="button" value="+" onClick={up} />

      {/* 숫자 입력창: 증감 단위 조절 */}
      <p>
        <input type="text" value={number} onChange={changNumber} />
      </p>

      {/* count 값 출력 */}
      <p>
        <span>{count}</span>
      </p>
    </div>
  );
}

export default App;
