import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './componentes/App/App.js';



ReactDOM.render(

  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </div>,

  document.getElementById('root')
);

