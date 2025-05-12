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
 - {}로 감싸면 표현식이 된다. (예)<h2>{props.title}</h2>
 - 컴포넌트에 이벤트 추가
 ```jsx
 function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{ //onClick 이벤트 추가
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        props.onChangeMode(); // <Header> 컴포넌트에 있는 onChangeMode() 함수를 호출한다.
      }}>{props.title}</a></h1>
    </header>
  )
}
 ```