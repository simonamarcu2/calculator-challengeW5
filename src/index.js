import React from 'react';
import ReactDOM from 'react-dom';
import './calculator';
import Calculator from './calculator';

//render the calculator to the app page
ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
