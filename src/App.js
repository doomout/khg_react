import './App.css';
import {useState} from 'react';

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
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        props.onChangeMode(Number(event.target.id)); // <a> 태그에 있는 id 값을 가져와서 <Nav> 컴포넌트에 있는 onChangeMode() 함수를 호출한다.
        // event.target.id 는 <a> 태그의 id 값을 가져온다.
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

function Create() {
  return (
    <article>
      <h2>Create</h2>
      <form>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name='body' placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

function App() {
  // useState() 훅을 사용하여 상태를 관리한다.
  const [mode, setMode] = useState('WELCOME'); 
  const [id, setId] = useState(null); // id 상태를 추가한다.
  
  // 내비게이션 목록이 있는 정보를 자바스크립트 자료 구조에 맞게 변경
  // 함수 안에선 바뀌지 않기에 const 로 선언
  // 값이 여러 개이기에 배열로 선언 []
  const topics = [
    {id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language'},
    {id: 2, title: 'CSS', body: 'CSS is Cascading Style Sheets'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is Programming Language'},
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      console.log(topics[i].id, id);
      if(topics[i].id === Number(id)){ // id 값이 같으면
        title = topics[i].title; // 제목을 가져온다.
        body = topics[i].body; // 본문을 가져온다.
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE'){
    content = <Create></Create>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        //mode = 'WELCOME'; // mode 값을 'WELCOME'으로 변경
        setMode('WELCOME'); // mode 값을 'WELCOME'으로 변경
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        //mode = 'READ';
        setMode('READ'); // mode 값을 'READ'로 변경
        setId(id); // id 값을 변경
      }}></Nav>
      {content}
      <a href="/create" onClick={(event)=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        setMode('CREATE'); // mode 값을 'CREATE'로 변경
      }}>CREATE</a>
    </div>
  );
}

export default App;
