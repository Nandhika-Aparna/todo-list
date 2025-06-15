import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import {TodosProvider} from './TodosContext.jsx';

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

  

function App() {
  

  return (
    <>
      <main>
        <TodosProvider>
          <Header appName="To-Do List with React" />
          <p>-by Nandhika Aparna B R</p>

          <Home />
        </TodosProvider>
          
        
      </main>
    </>
  )
}

export default App
