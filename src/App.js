import logo from './logo.svg';
import './App.css';
import {use, useState} from 'react';
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

function Create(prop) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        // form 태그에서 값 가져와서 저장
        const title = event.target.title.value;
        const body = event.target.body.value;
        // 저장된 값을 onCreate 함수 파라미터로 넣음
        prop.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"/></p>
      </form>
    </article>
  )
}

function App() {
  // mode 라는 상태값 만들고, setMode로 값을 바꿔라.
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);
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
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=> {
      // title는 이 객체의 프로퍼티 이름, _title는 파라미터로부터 온 이름
      const newTopic = {id:nextId, title:_title, body:_body}
      
      const newTopics = [...topics]; // 배열복사
      newTopics.push(newTopic); // 변경
      setTopics(newTopics);
    }}></Create>
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
      <a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}
export default App;