import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import { CallBackHook } from './06-memos/CallBackHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { Layout } from './05-useLayourEffect/Layout';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Padre } from './07-tarea-memo/Padre';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from "react-router-dom";

// import './08-useReducer/intro-reducer';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* <CounterWithCustomHook /> */}
      {/* <HooksApp /> */}
      {/* <CounterApp /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks /> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
      {/* <Padre /> */}
      {/* <TodoApp /> */}
      <MainApp />
    </StrictMode>
  </BrowserRouter>,
)
