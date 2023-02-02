// Todo List
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const getTask = (event) => {
    setNewTask(event.target.value);
}

const addNewTask = () => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask
    }

    setTodoList([...todoList, task]);
}

const deleteTask = (id) => {
    const newTodoList = todoList.filter(task => task.id !== id);
    setTodoList(newTodoList);
}

return (
    <div className='App'>
        <div className="addTask">
            <input onChange={getTask} />
            <button onClick={addNewTask}>Add Task</button>
        </div>
        <div className="list">
            {todoList.map((task) => {
                return (
                    <div>
                        <h3>{task.taskName}</h3>
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </div>
                )
            }
            )}
        </div>
    </div >
)