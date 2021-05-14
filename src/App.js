import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoHead from './components/TodoHead';
import TodoTemplete from './components/TodoTemplete';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const Globalstyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`;

function App() {
  return (
<TodoProvider>
<Globalstyle/>
   <TodoTemplete>
     <TodoHead />
    <TodoList/>
    <TodoCreate/>
   </TodoTemplete>
</TodoProvider>
  );
}

export default App;
