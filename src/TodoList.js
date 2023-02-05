// Todo List
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
    };

    setTodoList([...todoList, task]);
}

const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
}

const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
        if (task.id === id) {
            return { ...task, completed: true };
        }

        return task;
    }))
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
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />
                );
            }
            )}
        </div>
    </div >
)