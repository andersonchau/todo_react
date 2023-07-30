import todoData from '../todoListData.json';
//import { initialState, reducer } from "../reducers/todo.reducer.js";
export default function TodoItemUI({itemData}) {
  
  return (
          <li class="list-group-item d-flex gap-1" key={itemData.itemId}>
                    <p class="p-0 m-0 flex-grow-1">{itemData.itemName}</p> 
                    <button class="btn btn-warning btn-sm">Details</button>  
                    <button class="btn btn-info btn-sm">Edit</button>  
                    <button class="btn btn-primary btn-sm">Delete</button>
                </li>
          );
}
