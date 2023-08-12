import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Button} from 'react-bootstrap';
import TodoList from './components/TodoListUI.js';
import TodoListUI from './components/TodoListUI';
import TodoForm from './components/TodoForm';
import React, { useEffect, useReducer,createContext } from "react";
import mainDataInit from './todoListData.json';
import { TasksContext, TasksDispatchContext } from './components/TaskContext.js';

const todoMainOpReducer = (state, action) => {
  switch (action.type) {
  case 'CREATE_GROUP':
  break;
  }
}


function App() {
  
  const [mainData, dispatchTodos] = useReducer(todoMainOpReducer,mainDataInit);
  
  return (  
   
    <TasksContext.Provider value={mainData}>
      <TasksDispatchContext.Provider value={dispatchTodos}>
    <div class="container">
        <div class="row">
          <div class="col">            
            {<TodoListUI />}
          </div>
        </div>
        <div class="row">
          <div class="col">            
            {mainData.ui.formShow == true && <TodoForm />}
          </div>
        </div>
        

        
    </div>
    </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );  
}

export default App;
