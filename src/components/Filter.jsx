import './Filter.scss';
import {useTodos} from '../TodosContext.jsx';



function Filter() {
    const store = useTodos();

    return (
    <>
        <div className="filters">
            <div>
                <p>Filter by state</p>
                <div className="badges">
                    <div 
                    className={`badge ${store.filterby==='todo'?'selected' :''}`}
                    onClick={()=>{store.setfilterby('todo')}}>
                        To-Do
                    </div>
                    <div 
                    className={`badge ${store.filterby==='done'?'selected' :''}`}
                     onClick={()=>{store.setfilterby('done')}}>
                        Done
                    </div>
                    {
                        store.filterby &&
                    <span  onClick={()=>{store.setfilterby('')}} 
                    className="clear">
                        x clear
                    </span>
                    }
                </div>
            </div>
        </div>
    </>
    )
  }
  
  export default Filter