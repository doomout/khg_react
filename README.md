## 리액트 프로그래밍
### 설치 환경, 실행 명령어
 - react: 19.1.0
 - react-dom: 19.1.0
 - node: 22.15.0
 - 개발 도구: Vite + VSCode
 - 실행: npm start
 - 빌드: npm run build
 - 정적 서버 실행: npx serve -s build
 - 터미널에서 리액트 실행 종료: 컨트롤 + c  
 # React 기초 학습 요약 (CRUD 구현)

이 프로젝트는 React의 기본 개념을 학습하고, CRUD(Create, Read, Update, Delete) 기능을 구현한 코드입니다.   
이 문서에서는 코드의 주요 구성 요소와 흐름을 설명합니다.

## 1. 주요 개념 정리

### 상태 관리 (`useState`)

* 컴포넌트의 동작 상태(mode, id, topics 등)를 저장 및 변경할 수 있도록 하는 React 훅.

### 컴포넌트 분리

* `Header`: 제목 클릭 시 WELCOME 화면으로 이동.
* `Nav`: 게시글 리스트를 보여주고 클릭 시 READ 모드로 전환.
* `Article`: 내용 출력.
* `Create`: 게시글 생성 폼.
* `Update`: 게시글 수정 폼.

---

## 2. 주요 기능 설명

### WELCOME

* 기본 초기 화면으로, 단순 인사 메시지 출력.

### READ

* 선택된 게시글의 상세 내용을 보여줌.
* `Update`, `Delete` 기능을 함께 제공.

### CREATE

* 제목과 본문 입력 폼을 제공하고, 새 게시글 추가.
* 추가 후 READ 모드로 전환.

### UPDATE

* 기존 게시글의 제목과 본문을 수정.
* 수정 후 READ 모드로 전환.

---

## 3. 주요 코드 설명

### 상태 선언

```jsx
const [mode, setMode] = useState('WELCOME');
const [id, setId] = useState(null);
const [nextId, setNextId] = useState(4);
const [topics, setTopics] = useState([...]);
```

### 게시글 추가 (CREATE)

```jsx
const newTopic = {id: nextId, title: _title, body: _body};
const newTopics = [...topics];
newTopics.push(newTopic);
setTopics(newTopics);
setId(nextId);
setNextId(nextId + 1);
```

### 게시글 수정 (UPDATE)

```jsx
const newTopic = [...topics];
const updatedTopic = {id, title, body};
newTopic[i] = updatedTopic;
setTopics(newTopic);
```

### 게시글 삭제 (DELETE)

```jsx
const newTopics = topics.filter(topic => topic.id !== id);
setTopics(newTopics);
```

---

## 4. 추가 참고

* JSX 내부 주석: `{/* 주석 */}` 형태 사용.
* JSX 외부 (JS 코드): 일반 `//`, `/* */` 주석 사용 가능.

---

## 5. React Router 란?

React Router는 React 애플리케이션에서 **클라이언트 사이드 라우팅**을 구현할 수 있도록 해주는 라이브러리 
사용자가 페이지를 이동할 때 전체 페이지를 다시 로드하지 않고도 URL 경로에 따라 화면을 전환할 수 있게 한ㄷ.

### 🛠️ 설치

```bash
npm install react-router-dom
```
```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```
### 주요 컴포넌트
* BrowserRouter: 라우팅을 감싸는 최상위 컴포넌트
* Routes: 여러 개의 Route를 감싸는 컨테이너
* Route: 경로와 컴포넌트를 연결
* Link: 페이지 이동을 위한 a 태그 대체 컴포넌트
* 공식 문서: https://reactrouter.com