import './App.css';
import {useState} from 'react';

// 사용자 정의 태그(반드시 대문자로 시작해야 한다.)
function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault(); // a 태그의 기본 동작을 막는다.
          props.onChangeMode(); // <Header> 컴포넌트에 있는 onChangeMode() 함수를 호출한다.
        }}>{props.title}</a>
      </h1>
    </header>
  )
}

function Nav(props) {
  const lis= []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
    <li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(event)=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        props.onChangeMode(Number(event.target.id)); // <a> 태그에 있는 id 값을 가져와서 <Nav> 컴포넌트에 있는 onChangeMode() 함수를 호출한다.
        // event.target.id 는 <a> 태그의 id 값을 가져온다.
      }}>{t.title}</a>
    </li>
    );
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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        const title = event.target.title.value; // title 값을 가져온다.
        const body = event.target.body.value; // body 값을 가져온다.
        props.onCreate(title, body); // <Create> 컴포넌트에 있는 onCreate() 함수를 호출한다.
      }}>
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name='body' placeholder="body"></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title); // title 상태를 추가한다.
  const [body, setBody] = useState(props.body); // body 상태를 추가한다.
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault(); // a 태그의 기본 동작을 막는다.
        const title = event.target.title.value; // title 값을 가져온다.
        const body = event.target.body.value; // body 값을 가져온다.
        props.onUpdate(title, body); // <Update> 컴포넌트에 있는 onUpdate() 함수를 호출한다.
      }}>
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={event=>{
            setTitle(event.target.value); // title 상태를 업데이트한다.
          }}/>
        </p>
        <p>
          <textarea name='body' placeholder="body" value={body} onChange={event=>{
            setBody(event.target.value); // body 상태를 업데이트한다.
          }}></textarea>
        </p>
        <p>
          <input type="submit" value="Update"/>
        </p>
      </form>
    </article>
  )
}

function App() {
  // useState() 훅을 사용하여 상태를 관리한다.
  const [mode, setMode] = useState('WELCOME'); 
  const [id, setId] = useState(null); // id 상태를 추가한다.
  const [nextId, setNextId] = useState(4); // 다음 id 값을 관리하기 위한 상태를 추가한다.
  const [topics, setTopics] = useState([
    {id: 1, title: 'HTML', body: 'HTML is HyperText Markup Language'},
    {id: 2, title: 'CSS', body: 'CSS is Cascading Style Sheets'},
    {id: 3, title: 'JavaScript', body: 'JavaScript is Programming Language'},
  ]);

  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, Web"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === Number(id)){ // id 값이 같으면
        title = topics[i].title; // 제목을 가져온다.
        body = topics[i].body; // 본문을 가져온다.
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <> {/*여러개 태그를 묶기 위해 빈 태그를 사용 */}
      <li>
          <a href={'/update/'+id} onClick={event=>{
          event.preventDefault(); // a 태그의 기본 동작을 막는다.
          setMode('UPDATE'); // mode 값을 'UPDATE'로 변경
        }}>Update</a>
      </li>
      <li>
        <input type="button" value="Delete" onClick={()=>{
          const newTopics = [] // 빈 비열로 초기화 한다.
          // topics 배열을 순회하면서 id 값이 같지 않은 것만 새로운 배열에 추가한다.
          for(let i=0; i<topics.length; i++){
            if(topics[i].id !== id){ // id 값이 같지 않으면
              newTopics.push(topics[i]); // 새로운 배열에 추가한다.
            }
          }
          setTopics(newTopics); // topics 배열을 업데이트한다.
          setMode('WELCOME'); // 삭제 후 mode 값을 'WELCOME'으로 변경하여 첫화면으로 이동
        }}/>
      </li>
    </>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic ={id:nextId, title:_title, body:_body}; 
      const newTopics = [...topics]; // topics 배열을 복사한다.
      newTopics.push(newTopic); // 새로운 주제를 추가한다.
      setTopics(newTopics); // topics 배열을 업데이트한다.
      setMode('READ'); // mode 값을 'READ'로 변경
      setId(nextId); // id 값을 nextId로 변경
      setNextId(nextId + 1); // nextId 값을 1 증가시킨다.
    }}></Create>
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === Number(id)){ // id 값이 같으면
        title = topics[i].title; // 제목을 가져온다.
        body = topics[i].body; // 본문을 가져온다.
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body)=>{
      console.log(title, body);
      const newTopic = [...topics]; // topics 배열을 복사한다.
      const updatedTopic = {id:id, title:title, body:body}; // 업데이트된 주제를 만든다.
      for(let i=0; i<newTopic.length; i++){
        if(newTopic[i].id === id){ // id 값이 같으면
          newTopic[i] = updatedTopic; // 업데이트된 주제로 변경한다.
          break; // 반복문을 종료한다.
        }
      }
      setTopics(newTopic); // topics 배열을 업데이트한다.
      setMode('READ'); // mode 값을 'READ'로 변경 하면 상세 페이지로 이동한다.
    }}></Update>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('WELCOME'); // mode 값을 'WELCOME'으로 변경
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('READ'); // mode 값을 'READ'로 변경
        setId(id); // id 값을 변경
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(event)=>{
          event.preventDefault(); // a 태그의 기본 동작을 막는다.
          setMode('CREATE'); // mode 값을 'CREATE'로 변경
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
