import React from 'react';
import ReactDOM from 'react-dom/client';
// Importamos componentes
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} ></CounterApp>
    {/* <FirstApp title="Hola, Soy Vegata" subTitle='Esto es un subTitle'></FirstApp> */}
  </React.StrictMode>
);