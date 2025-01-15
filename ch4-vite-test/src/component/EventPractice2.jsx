import React, { useState } from 'react';

const EventPractice2 = () => {
  // 차이점, useState 훅스 이용한 부분 다름
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습, 함수형 컴포넌트 버전</h1>
      <h1>message : {message}</h1>
      <h1>username : {username}</h1>

      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice2;
