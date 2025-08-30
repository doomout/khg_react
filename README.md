# React Programming Study
React 기초 학습을 위한 실습 프로젝트 (CRUD, Router, Redux, Next.js 정리)
## 📦 설치 및 실행
### 설치 환경, 실행 명령어
 - react: 19.1.0
 - react-dom: 19.1.0
 - node: 22.15.0

## Vite 기반 프로젝트 생성
```bash
npm create vite@latest my-app
cd my-app
npm install
```
## CRA 기반 프로젝트 생성
```bash
npx create-react-app my-app
```
## 주요 명령어
```bash
npm start        # 개발 서버 실행
npm run build    # 빌드
npx serve -s build   # 정적 서버 실행
```
## Redux
```bash
npm install redux react-redux
npm install @reduxjs/toolkit
```
## CRA 생성 시 Redux 템플릿 사용 가능
```bash
npx create-react-app my-app --template redux
```
## Next.js
```bash
npx create-next-app@latest my-next-app
npm run dev      # 개발 서버
npm run build    # 빌드
npm run start    # 프로덕션 실행
```
## 📝 학습 내용 요약

#### React 기초 (CRUD)
- 상태 관리: `useState`
- 컴포넌트 분리: Header, Nav, Article, Create, Update
- 기능: WELCOME → READ → CREATE → UPDATE → DELETE

#### React Router
- 클라이언트 사이드 라우팅
- BrowserRouter / HashRouter 차이
- GitHub Pages 등 정적 호스팅 시 HashRouter 권장

#### Redux
- 전역 상태 관리 도구
- 핵심 개념: Store, Action, Reducer, Dispatch, Subscribe
- Redux Toolkit 사용 권장

#### Next.js
- React 기반 프레임워크
- SSR & SSG 지원
- 파일 기반 라우팅, API Routes, 환경변수, TypeScript 지원
