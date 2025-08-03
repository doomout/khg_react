import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
// 일반적인 버튼 컴포넌트
const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

// props 값에 따라 디자인이 동적으로 변경되는 버튼
const PrimaryButton = styled.button`
  color: ${function(props) {
    console.log(props);
    if (props.primary) {
      return 'red';
    }
    else {
      return 'black';
    }
  }};
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>primary</PrimaryButton>
    </div>    
  );
}

export default App;
