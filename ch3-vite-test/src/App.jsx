import './App.css';
import Counter from './component/Counter';
import Mycomponent from './component/Mycomponent';
import Mycomponent2 from './component/Mycomponent2';
import Say from './component/Say';
import Say2 from './component/Say2';

function App() {
  const name = '리액트';

  return (
    <>
      <h1>{name}</h1>
      <div className="react">{name}</div>
      {/* 자식 컴포넌트 */}
      {/* 순서1, props 이용해서 데이터 전달 예제 */}
      {/* <Mycomponent name="첫 데이터 전달하기 속성은 name으로 전달함." /> */}
      {/* 순서2, props 이용해서 데이터 전달 예제2, 기본값 사용 */}
      {/* <Mycomponent /> */}
      {/* 순서3, children 요소로 데이터 보내기  */}
      {/* <Mycomponent name="동시에 같이 보내기">children 요소로 데이터 보내기 </Mycomponent> */}
      {/* 순서4, props 타입 지정하고, 타입 불일치한 값을 임의로 전달해보기 */}
      {/* <Mycomponent name={3}>children 요소로 데이터 보내기 </Mycomponent> */}
      {/* 순서5, favoriteNumber 속성 전달해보기 */}
      {/* <Mycomponent name="동시에 같이 보내기" favoriteNumber={100}>children 요소로 데이터 보내기 </Mycomponent> */}
      {/* 순서6, 클래스형 컴포넌트 버전으로 출력해보기. */}
      {/* <Mycomponent2 name="동시에 같이 보내기" favoriteNumber={100}>children 요소로 데이터 보내기 </Mycomponent2> */}
      {/* 순서7, 클래스형 컴포넌트 state 확인 예시 */}
      {/* <Counter /> */}
      {/* 순서8, 함수형 컴포넌트 hooks 중에서 useState 확인 예시 */}
      {/* <Say /> */}
      <Say2 />
    </>
  );
}

export default App;