export const Task = (props) => {
    return (
        <div className='task' style={{ color: props.completed === true ? 'green' : 'black' }}>
            <h3>{props.taskName}</h3>
            <button onClick={() => props.completeTask(props.completed)}> Complete </button>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}