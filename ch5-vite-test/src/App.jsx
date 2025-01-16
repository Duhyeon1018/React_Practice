// 교체 작업 3
import React, { Component } from 'react';
import './App.css';
import RefSample from './component/RefSample';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';
import ScrollBox2 from './component/ScrollBox2';
import ScrollBoxEx from './component/ScrollBoxEx';

// function App() {
// 함수형 컴포넌트 -> 클래스 형 컴포넌트 변경.
// 교체 작업 1
class App extends Component {
  // 교체 작업 2
  render() {
    return (
      <>
        <h1 className="react">ch5 ref, DOM 요소에 이름달기</h1>
        {/* <ValidationSample />
      <RefSample /> */}
        {/* 교체 작업 4 */}
        {/* 부모에서 자식 컴포넌트 방향으로 props 전달하기.  */}
        {/* 컴포넌트에 접근하기 위해서, 컴포넌트에 ref 달기.  */}
        <ScrollBoxEx ref={(ref) => (this.scrollBoxEx = ref)} />
        {/* 부모에서 자식 컴포넌트의 ref에 접근해서, 자식 컴포넌트 안에 메서드 호출하기 */}
        <button onClick={() => this.scrollBoxEx.scrollToBottom()}>
          맨밑으로
        </button>
        <button onClick={() => this.scrollBoxEx.scrollToTop()}>맨위로</button>
        <button onClick={() => this.scrollBoxEx.scrollToMiddle()}>
          중간으로
        </button>
      </>
    );
  }
}

export default App;
