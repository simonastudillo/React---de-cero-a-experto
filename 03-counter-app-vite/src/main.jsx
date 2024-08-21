import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos componentes
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWorldApp></HelloWorldApp> */}
    {/* <FirstApp title="Hola" subTitle={123}></FirstApp> */}
    <CounterApp value={1}></CounterApp>
  </React.StrictMode>
);