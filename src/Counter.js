// Counter to Increase, Decrease and Set to zero
const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count + 1);
}

const decreaseCount = () => {
    setCount(count - 1);
}

return (
    <div className='App'>
        <button onClick={increaseCount}>Increase Count</button>

        <button onClick={decreaseCount}>Decrease Count</button>

        <button onClick={() => {
            setCount(0);
        }}>
            Set Count to Zero
        </button>

        {count}
    </div >
)