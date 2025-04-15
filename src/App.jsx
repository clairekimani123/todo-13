import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';7
import { TODOS } from './data/data';

function App() {

  const [todos, setTodos] = useState(TODOS);

  // console.log(todos);
  
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
    
  // }

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')


  let handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return

    setTasks([...tasks, {id:Date.now(), text:
      newTask, completed: false}])
    setNewTask('')
  }
 


  return (
   <div>
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         value={newTask}
         onChange={(e) =>
          setNewTask(e.target.value)}
         placeholder='Add new task...'
          />
          <button type='submit'>Add new task</button>
      </form>
    </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type='submit'>Add Todo</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
     
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />
      <button />

   </div>
  )
}

export default App
