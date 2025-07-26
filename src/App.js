import logo from './logo.svg';
import './App.css';
function Header(props) {
  console.log('props', props.title)
  return (
    <header>
      <h1><a href="/">{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li>{t.title}</li>);
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
  // 네비게이션의 목옥을 담을 topice 배열 변수(제목, 본문, 각자의 ID 값)
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
export default App;