import {useTodos} from '../../TodosContext.jsx';

function AddTodoModal() {
   const store = useTodos();

   function addtaskhandler(){
    let newtodo={isdone:false};
    newtodo.title=document.querySelector('input[name=title]').value;
    newtodo.description=document.querySelector('textarea[name=description').value;
    if(newtodo.title && newtodo.description){
        store.dispatch({type:'added',newtodo});
        store.setmodalisactive(false);
    }else{
        alert('Please enter title and description');
    }
   }
    return (
    <>
        <div className="form">      
            <h3>Add a new task</h3>
            <label htmlFor="title">Title *</label>
            <input type="text" name="title" placeholder="Enter a title..." /><br />
            <label htmlFor="description">Description *</label>
            <textarea name="description" rows="4" placeholder="Enter a description..." /><br />
            <button onClick= {addtaskhandler}className="btn gray">Add Task</button>
        </div>
    </>
    )
  }
  
  export default AddTodoModal