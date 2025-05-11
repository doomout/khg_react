import './App.css';

// 사용자 정의 태그(반드시 대문자로 시작해야 한다.)
function Header() {
  return (
    <header>
      <h1><a href="/">React</a></h1>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Header></Header>
      <Header></Header>
      <nav>
        <ol>
          <li><a href="/read/1">HTML</a></li>
          <li><a href="/read/2">CSS</a></li>
          <li><a href="/read/3">JavaScript</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
