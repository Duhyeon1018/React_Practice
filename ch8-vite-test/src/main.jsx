import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // 생명주기 콘솔 확인시, 두번씩 출력되는 부분을 방지할 수 있음.
  <App />,
  // </StrictMode>,
);
