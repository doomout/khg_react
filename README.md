## 리액트 프로그래밍
1. 설치 환경, 실행 명령어
 - react: 19.1.0
 - react-dom: 19.1.0
 - node: 22.15.0
 - 개발 도구: Vite + VSCode
 - 실행: npm start
 - 빌드: npm run build
 - 정적 서버 실행: npx serve -s build
 - 터미널에서 리액트 실행 종료: 컨트롤 + c  
2. 리액트 문법(공부할 때마다 업데이트)
 - 사용자 정의 태그를 만들 때는 반드시 대문자로 시작해야 한다.
 - 컴포넌트에 이벤트 추가

📌 React의 state란?  
state는 컴포넌트의 동적인 데이터(변하는 값)를 저장하고 관리하는 객체입니다.  
사용자 입력, 네트워크 응답 등으로 인해 UI가 바뀌어야 할 때 state를 사용합니다.  

✅ 특징  
컴포넌트 내부에서 관리되는 데이터  
state가 변경되면 해당 컴포넌트는 자동으로 리렌더링됨  
함수형 컴포넌트에선 useState() 훅으로 사용

✅ 기본 사용 예시 (함수형 컴포넌트)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count는 현재 상태값, setCount는 상태 변경 함수

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```
🔄 props vs state 비교 정리
| 구분       | `props` (속성)                  | `state` (상태)                         |
| -------- | ----------------------------- | ------------------------------------ |
| 정의       | 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터    | 컴포넌트 내부에서 관리되는 동적인 데이터               |
| 수정 가능 여부 | **읽기 전용(Read-only)**          | **수정 가능 (setState 또는 useState로 변경)** |
| 사용 목적    | 컴포넌트 간 데이터 전달                 | 컴포넌트 내부의 상태 관리                       |
| 소유자      | 부모 컴포넌트                       | 자기 자신(해당 컴포넌트)                       |
| 리렌더링 여부  | props 변경 시 자식 컴포넌트는 **리렌더링**됨 | state 변경 시 **자기 자신이 리렌더링**됨          |
```jsx
function Hello(props) {
  return <h1>안녕하세요, {props.name}!</h1>;
}

function App() {
  const [name, setName] = useState('홍길동');

  return (
    <div>
      <Hello name={name} />  {/* props로 전달 */}
      <button onClick={() => setName('김철수')}>이름 바꾸기</button> {/* state로 관리 */}
    </div>
  );
}
```  
- props는 부모 → 자식으로 값을 전달할 때 사용하며 외부에서 주어지는 값  
- state는 컴포넌트 내부에서 관리하는 값으로 자기 자신이 변화시키는 값