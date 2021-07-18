import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/index.scss";

// Affichage de l'application compilée dans l'html

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

