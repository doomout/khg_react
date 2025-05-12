import './App.css';

// 사용자 정의 태그(반드시 대문자로 시작해야 한다.)
function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        props.onChangeMode(); // <Header> 컴포넌트에 있는 onChangeMode() 함수를 호출한다.
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis= []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function App() {
  // 내비게이션 목록이 있는 정보를 자바스크립트 자료 구조에 맞게 변경
  // 함수 안에선 바뀌지 않기에 const 로 선언
  // 값이 여러 개이기에 배열로 선언 []
  const topics = [
    {id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language'},
    {id: 2, title: 'CSS', body: 'CSS is Cascading Style Sheets'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is Programming Language'},
  ]
  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
    </div>
  );
}

export default App;
