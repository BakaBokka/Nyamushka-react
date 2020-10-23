import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import state from './state';
import Nyamushka from './Nyamushka';


ReactDOM.render(
  <React.StrictMode>
    <Nyamushka state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

