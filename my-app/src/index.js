import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




const loading = false

ReactDOM.render(
  <React.StrictMode>
    <App loading={loading}/>
  </React.StrictMode>,
  document.getElementById('root')
);


