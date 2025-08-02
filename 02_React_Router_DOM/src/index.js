import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import { HashRouter, Route, Routes, NavLink, useParams } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  { id: 1, title: 'HTML', description: 'HTML is...' },
  { id: 2, title: 'JavaScript', description: 'JS is...' },
  { id: 3, title: 'React', description: 'React is...' }
];

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  for (var i=0; i<contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  console.log(params);
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}

function Topics() {
  var lis = [];
  for (var i=0; i<contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={"/topics/" + contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <Routes>
        {/* 기존 코드를 하나의 라우터로 path 값에 따라 주소 처리
          <Route path="/1" element={'HTML is...'} />
          <Route path="/2" element={'JS is...'} />
          <Route path="/3" element={'React is...'} />
        */}
        <Route path="/:topic_id" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Found'}/>
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

reportWebVitals();