
import {useTodos} from '../TodosContext.jsx';

import Todo from './Todo.jsx';

function TodosList() {

  const store = useTodos();

  return (
    <>
        <div className="todos">
          { 
           store.filteredtodo().length ? store.filteredtodo().map(todo =>
                  <Todo
                    todo={todo}
                    key={todo.id}
                  />
                  ): 'No to-dos to show. Try clearing filter or add a new to-do'
          }


        </div>
    </>
  )
}

export default TodosList