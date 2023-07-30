export default function TodoListDemoUI() {
    
    return (

        <div class="card">
        <h5 class="card-header">
            <div class="d-flex gap-1">
                 <p class="p-0 m-0 flex-grow-1">Hello</p> 
                 <button class="btn btn-danger btn-sm">Create Group</button>  
            </div>
        </h5>
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
                <li class="list-group-item d-flex gap-1">
                    <p class="p-0 m-0 flex-grow-1">First item</p> 
                    <button class="btn btn-danger btn-sm">Add</button>  
                    <button class="btn btn-warning btn-sm">Details</button>  
                    <button class="btn btn-info btn-sm">Edit</button>  
                    <button class="btn btn-primary btn-sm">Delete</button>
                </li>
               <li class="list-group-item d-flex gap-1">
                    <p class="p-0 m-0 flex-grow-1">Second item</p>  
                    <button class="btn btn-danger btn-sm">Add</button>  
                    <button class="btn btn-warning btn-sm">Details</button>  
                    <button class="btn btn-info btn-sm">Edit</button>  
                    <button class="btn btn-primary btn-sm">Delete</button>
                </li> 
          </ul>
          
        </div>
      </div>
      

    );

}
