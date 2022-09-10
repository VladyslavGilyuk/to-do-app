import { useState} from 'react';
import './App.css';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState("")

  const addTask = (userInput) => {
    if (userInput) {
      const addTodo = {
        id: Math.floor(Math.random() * 10000),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, addTodo])
    }
  }

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTask = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    }))
  }

  const editTask = (id, task) => {
    setEdit(id)
    setValue(task)
  }

  const saveTask = (id) => {
    let newTask = [...todos].map(todo => {
      if(todo.id === id) {
        todo.task = value
      }
    return todo
    })
    setTodos(newTask)
    setEdit(null)
  }

  return (
    <>
      <div className='container'>
        <h1 className='header'>To Do List: {todos.length}</h1>
        <ToDoForm addTask={addTask}/>
        {todos.map((todo) => {
          return (
            <ToDo
            value={value}
            setValue={setValue}
            edit={edit}
            setEdit={setEdit}
            saveTask={saveTask}
            key={todo.id} 
            todo ={todo}
            editTask={editTask}
            removeTask ={removeTask}
            toggleTask ={toggleTask}
            addTask={addTask}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;