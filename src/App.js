import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function Header(props) {
  console.log('props', props.title)
  return (
    <header>
      <h1><a href="/" onClick={(event)=>{
        event.preventDefault(); // event 기본 동장 막음
        props.onChangMode(); // onChangMode() 함수 호출
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    // li 태그는 key 값이 있어야 하고 고유해야 하기에 id를 설정
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        // 태그의 속성에서 오는 id는 문자 이기에 형변환으로 숫자로 변환
        props.onChangMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>);
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
  // [인덱스의 값을 읽기, state의 값을 변경하기]
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  // 네비게이션의 목옥을 담을 topice 배열 변수(제목, 본문, 각자의 ID 값)
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if(mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      console.log(topics[i].id, id);
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangMode={()=>{
        setMode('WELCOME'); // mode의 값을 바꿀 때는 setMode를 사용해야 한다
      }}></Header>
      <Nav topics={topics} onChangMode={(_id)=>{
        setMode('READ'); 
        setId(_id);
      }}></Nav>
      {content} 
    </div>
  );
}
export default App;