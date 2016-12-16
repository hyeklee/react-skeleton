import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDom.render(<App/>,rootElement);

//webpack hot reload시 수정된 파일만 reload하도록 설정
