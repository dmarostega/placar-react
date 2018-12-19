import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


/*COMO BOA PRÁTICA no app.js (BOOTSTRTAP) 
  inicia-se apenas um component principal <App />*/
ReactDOM.render(
    <App />,
    document.getElementById("app")
);