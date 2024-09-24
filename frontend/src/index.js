import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoreContextProvidar from './context/StoreContect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvidar>
       <App />
    </StoreContextProvidar>
  </React.StrictMode>
);


reportWebVitals();
