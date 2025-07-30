/** 코드 요약
mode를 상태 값으로 사용해 현재 화면이 어떤 모드인지(WELCOME, READ, CREATE, UPDATE 등) 판단합니다.
topics는 글 목록이고, 여기에 글 추가/수정/읽기 등을 통해 내용이 바뀝니다.
Header, Nav, Article, Create, Update 등으로 컴포넌트를 나누어 구성했습니다.
onClick이나 onSubmit 이벤트는 모두 event.preventDefault()로 기본 새로고침 동작을 막고, 
setMode, setId 등을 이용해 상태만 바꿔서 SPA처럼 작동합니다.
*/
import logo from './logo.svg';
import './App.css';
import {use, useState} from 'react'; // React에서 상태를 다루기 위해 useState를 import

// Header 컴포넌트: 제목을 클릭하면 'WELCOME' 모드로 이동
function Header(props) {
  console.log('props', props.title)
  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault(); // 기본 동작(페이지 새로고침) 막기
          props.onChangMode(); // 부모 컴포넌트(App)의 함수 실행
        }}>
          {props.title}
        </a>
      </h1>
    </header>
  )
}

// Nav 컴포넌트: 목록(메뉴)을 동적으로 생성
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}> {/* key는 React에서 리스트 요소를 구분하기 위한 고유값 */}
        <a 
          id={t.id} 
          href={'/read/'+t.id} 
          onClick={event=>{
            event.preventDefault(); // 기본 동작 방지
            props.onChangMode(Number(event.target.id)); // id는 문자열이므로 숫자로 변환
          }}
        >
          {t.title}
        </a>
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

// Article 컴포넌트: 글 제목과 본문을 보여줌
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

// Create 컴포넌트: 새로운 글을 작성하는 폼
function Create(prop) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault(); // 폼 제출 시 새로고침 막기
        const title = event.target.title.value; // 입력값 추출
        const body = event.target.body.value;
        prop.onCreate(title, body); // 부모에게 데이터 전달
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  )
}

// Update 컴포넌트: 기존 글을 수정하는 폼 (state 사용)
function Update(props) {
  const [title, setTitle] = useState(props.title); // 기존 값을 초기값으로 설정
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body); // 수정된 값 전달
      }}>
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="title" 
            value={title} 
            onChange={event=>{
              setTitle(event.target.value); // 입력값이 바뀔 때마다 상태 업데이트
            }} 
          />
        </p>
        <p>
          <textarea 
            name="body" 
            placeholder="body" 
            value={body} 
            onChange={event=>{
              setBody(event.target.value); // 입력값 변경 감지
            }}
          />
        </p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  )
}

// App 컴포넌트: 전체 앱의 메인 컴포넌트
function App() {
  const [mode, setMode] = useState('WELCOME'); // 현재 상태 (WELCOME, READ, CREATE, UPDATE 등)
  const [id, setId] = useState(null); // 현재 선택된 글의 id
  const [nextId, setNextId] = useState(4); // 다음 글에 사용할 id

  // 글 목록 상태
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);

  let content = null; // 중앙 내용
  let contextControl = null; // 업데이트 버튼 등 컨트롤 영역

  // 각 모드에 따라 content 내용을 다르게 설정
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" />
  } else if(mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />
    
    // 현재 글 보기일 때만 Update 링크, 삭제 버튼 보이기
    contextControl = <>
      <li>
        <a href={'/update/'+id} onClick={event=>{
          event.preventDefault();
          setMode('UPDATE');
        }}>Update</a>
      </li>
      <li>
        <input type="button" value="Delete" onClick={()=>{
          const newTopics = []; // 빈 배열 생성
          // 반복하면서 id가 일지하지 않는 데이터만 새로운 배열에 저장(결과적으로는 일치한 데이터를 뺀 배열이 생성)
          for(let i=0; i<topics.length; i++) {
            if(topics[i].id !== id) {
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics); // 상태 업데이트
          setMode('WELCOME'); // 삭제 후에는 첫 화면으로 이동
        }}/>
      </li>
    </>
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(_title, _body)=> {
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]; // 기존 배열 복사
      newTopics.push(newTopic); // 새 글 추가
      setTopics(newTopics); // 상태 업데이트
      setMode('READ'); // 작성 후 읽기 모드로 이동
      setId(nextId); // 방금 작성한 글로 이동
      setNextId(nextId + 1); // 다음 글을 위한 id 증가
    }} />
  } else if(mode === 'UPDATE') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update 
      title={title} 
      body={body} 
      onUpdate={(updatedTitle, updatedBody)=>{
        const newTopics = [...topics];
        const updatedTopic = {id:id, title:updatedTitle, body:updatedBody};
        for(let i=0; i<newTopics.length; i++) {
          if(newTopics[i].id === id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ'); // 수정 후 상세보기로
      }} 
    />
  }

  return (
    <div>
      {/* 헤더: 제목 클릭하면 WELCOME 모드 */}
      <Header title="WEB" onChangMode={()=>{
        setMode('WELCOME');
      }} />

      {/* 네비게이션: 글 목록 클릭 시 READ 모드로 */}
      <Nav topics={topics} onChangMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }} />

      {/* 중앙 내용 영역 */}
      {content}

      {/* Create 버튼 및 Update 버튼 영역 */}
      <ul>
        <li>
          <a href="/create" onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
