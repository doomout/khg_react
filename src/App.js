import './App.css';

// 사용자 정의 태그(반드시 대문자로 시작해야 한다.)
function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav() {
  return (
    <nav>
      <ol>
        <li><a href="/read/1">HTML</a></li>
        <li><a href="/read/2">CSS</a></li>
        <li><a href="/read/3">JavaScript</a></li>
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
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, Web"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}

export default App;
