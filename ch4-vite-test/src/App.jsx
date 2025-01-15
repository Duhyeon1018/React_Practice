import './App.css';
// import EventPractice from './component/EventPractice';
// import EventPractice2 from './component/EventPractice2';
// import Say2 from './component/Say2';
// import Login from './component/Login';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return (
    <>
      {/* <h1 className="react">ch4 이벤트 핸들러 해보기</h1>
      {/* <Say2 />
      <EventPractice />
      <EventPractice2 /> */}
      {/* <Login />  */}
      <h1>로그인 및 회원가입 미니실습</h1>
      <Login />
      <SignUp />
    </>
  );
}

export default App;
