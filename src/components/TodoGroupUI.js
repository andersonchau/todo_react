import todoData from '../todoListData.json';
import TodoItemUI from './TodoItemUI';
export default function TodoGroupUI(todoGroup) {


  
  let todoUIList = todoData.map(item =>
    <div class="card-body">
    <h5 class="card-title">
      <div class="d-flex gap-1">
           <p class="p-0 m-0 flex-grow-1">Hello</p> 
           <button class="btn btn-danger btn-sm">Add</button>  
           <button class="btn btn-info btn-sm">Edit</button>  
           <button class="btn btn-primary btn-sm">Delete</button>
      </div>
    </h5>
    <ul class="list-group"> 
          <TodoItemUI itemData ={{"itemName" : "Mobile phone fee" , "itemDesc" : "Pay to CMCC" ,"due" : "2023-03-31 15:00","itemId" : "2"}} />
          <TodoItemUI itemData ={{"itemName" : "Mobile phone fee" , "itemDesc" : "Pay to CMCC" ,"due" : "2023-03-31 15:00","itemId" : "3"}} />
    </ul>
    
  </div>
      );
  
  return {todoUIList};

}
