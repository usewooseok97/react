import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> 안전하게 두번검사 할수있도록 랜더링을 2번 해준다 consol이 2번뜨게된다 
);

