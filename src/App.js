import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Button} from 'react-bootstrap';
import TodoList from './components/TodoListUI.js';
import TodoListUI from './components/TodoListUI';
function App() {
  return (  
    <div>
            
    <div class="container">
        <div class="row">
          <div class="col">
            <TodoListUI />
          </div>
        </div>
    </div>
</div> 
  );  
}

export default App;
