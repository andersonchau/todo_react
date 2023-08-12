import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function TodoForm() {

    return (
        <>
       

        <form>
            <div class="form-group">
                <label for="exampleInputPassword1">Input Data</label>
                <input type="text" class="form-control" id="todoId" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    
    </>
        );

}