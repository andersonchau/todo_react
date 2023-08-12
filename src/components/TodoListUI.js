import todoDataInit from '../todoListData.json';
import TodoItemUI from './TodoItemUI';
import React, { useEffect, useState,useContext, useReducer } from "react";
import axios from 'axios';
import { TasksContext, TasksDispatchContext } from './TaskContext.js';


const baseURL = "https://25e2e52f-2486-4c6f-915d-86c06440f2f2.mock.pstmn.io/rest/api/getTodo";

export default function TodoListUI() {
  
  
  const todoData = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);


  /*
  const dispatch = useContext(TodoContext);
  
  // to make sure to call 
  useEffect(() => {
    console.log('Start fetching data');
    const fetchData = async () =>{
     // setLoading(true);
      try {
        const {data: response} = await axios.get(baseURL);
        console.log('Fetch data done : ' , response);
        
      } catch (error) {
        console.error(error.message);
      }
      //setLoading(false);
    }

    fetchData();
  }, []);
  */
  //console.log(JSON.stringify(todoData));
  
  let todoUIListX = (
   
    <>
    <div class="card mt-2">
    <h5 class="card-header">
        <div class="d-flex gap-1">
             <p class="p-0 m-0 flex-grow-1">Hello</p> 
             <button class="btn btn-danger btn-sm" onClick={() => onCreateGroup()}>Create Group</button>  
        </div>
    </h5>
      {
        todoData.data.map(todoGroupData =>
          <div class="card-body">
            <h5 class="card-title">
              <div class="d-flex gap-1">
                <p class="p-0 m-0 flex-grow-1">{todoGroupData.groupName}</p> 
                <button class="btn btn-danger btn-sm" >Add</button>  
                <button class="btn btn-info btn-sm">Edit</button>  
                <button class="btn btn-primary btn-sm">Delete</button>
              </div>
            </h5>
            <ul class="list-group"> 
          {
            todoGroupData.items.map((todoItem,index) => 
            
              <TodoItemUI pos ={index} />
              
            )
          }
          </ul>
        </div>
        )
      }
        </div>
          <div class="d-flex flex-row gap-3 mt-2" >
            <button class="btn btn-primary">Save</button>  
            <button class="btn btn-primary">Reset</button>  
           
          </div>
      </>

      
      
  );
  
  //let todoUIListX = (<div></div>);
  return <>  {todoUIListX} </>
}

function onCreateGroup(){
  console.log('onCreateGroup called');
}

function tasksReducer(tasks, action) {
  
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
