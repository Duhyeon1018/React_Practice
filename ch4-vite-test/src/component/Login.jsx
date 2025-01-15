import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      alert('ID, PASSWORD를 채워주세요');
      return;
    }

    alert('로그인 성공!');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>ID</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ID를 입력하세요"
            onKeyPress={onKeyPress}
          />
        </div>

        <div>
          <label>비밀번호</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            onKeyPress={onKeyPress}
          />
        </div>

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
