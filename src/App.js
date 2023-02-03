import './App.css';
import { useState } from 'react';
// import { User } from './User';
// import { Planet } from './Planets';
import { Task } from './Task';

function App() {

  // CSS, Ternary Operator
  // let isTextColorful = true;
  // let isButtonPresent = false;

  // return (
  //   <div className='App'>
  //     <h1 style={{ color: isTextColorful ? "green" : "red" }}>This text is colorful</h1>
  //     {isButtonPresent && <button>This is a button</button>}
  //   </div >
  // );

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getTask = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={getTask} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          )
        }
        )}
      </div>
    </div >
  )
}

export default App;
