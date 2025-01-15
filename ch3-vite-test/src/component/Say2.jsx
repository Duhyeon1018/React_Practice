import React, { useState } from 'react';

const Say2 = () => {
  const [message, setMessage] = useState('강두현님,환영합니다');
  const [color, setColor] = useState('black');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  const welcome = () => setMessage('환영합니다!');
  const textButton = () => {
    setMessage(document.querySelector("input[name='inputText']").value);
  };
  const resetColor = () => setColor('black');

  return (
    <div>
      <input
        type="text"
        name="inputText"
        placeholder="메세지를 입력하세요"

        // onChange={(e) => setMessage(e.target.value)}
        //onChange 이벤트는 사용자가 입력 필드의 내용을 변경할 때마다 발생함.
        // 즉, 사용자가 텍스트를 입력하거나 수정할 때마다 호출됨.
        //(e)는 이벤트 객체,이 객체는 input 요소에서 발생한 이벤트에 대한 정보를 담고있음
        //e.target.value는 입력 필드의 현재 값. 즉, 사용자가 input 필드에 입력한 텍스트 값을 가져오는거.
        //setMessage(e.target.value)는 message 상태를 입력된 값으로 업데이트하는거
      />

      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={welcome}>환영합니다</button>
      <button onClick={textButton}>메시지 출력</button>

      {/* //추가2 */}
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      <button onClick={resetColor}>글자색 초기화</button>
    </div>
  );
};

export default Say2;
