import todoDataInit from '../todoListData.json';
import TodoItemUI from './TodoItemUI';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const baseURL = "https://25e2e52f-2486-4c6f-915d-86c06440f2f2.mock.pstmn.io/rest/api/getTodo";

export default function TodoListUI() {
  
  
  const [todoData, setTodoData] = useState(todoDataInit);
  
  useEffect(() => {
    console.log('Start fetching data');
    const fetchData = async () =>{
     // setLoading(true);
      try {
        const {data: response} = await axios.get(baseURL);
        console.log('Fetch data done : ' , response);
        setTodoData(response);
      } catch (error) {
        console.error(error.message);
      }
      //setLoading(false);
    }

    fetchData();
  }, []);


  let todoUIListX = (
    
    <>
    <div class="card mt-2">
    <h5 class="card-header">
        <div class="d-flex gap-1">
             <p class="p-0 m-0 flex-grow-1">Hello</p> 
             <button class="btn btn-danger btn-sm">Create Group</button>  
        </div>
    </h5>
      {
        todoData.map(todoData =>
          <div class="card-body">
            <h5 class="card-title">
              <div class="d-flex gap-1">
                <p class="p-0 m-0 flex-grow-1">{todoData.groupName}</p> 
                <button class="btn btn-danger btn-sm">Add</button>  
                <button class="btn btn-info btn-sm">Edit</button>  
                <button class="btn btn-primary btn-sm">Delete</button>
              </div>
            </h5>
            <ul class="list-group"> 
          {
            todoData.items.map(todoItem => 
              <>
              <TodoItemUI itemData ={todoItem} />
              </>
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
  
  return <>  {todoUIListX} </>
}
