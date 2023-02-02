// Age increment and decrement
const [age, setAge] = useState(0);

const increaseAge = () => {
    setAge(age + 1);
}

const decreaseAge = () => {
    setAge(age - 1);
}

return (
    <div className='App'>
        <button onClick={decreaseAge}>Decrease Age</button>
        {" age = " + age + " "}
        <button onClick={increaseAge}>Increase Age</button>
    </div>
)

// Input display
const [inputValue, setInputValue] = useState("");

const getInputValue = (event) => {
    setInputValue(event.target.value);
}

return (
    <div className='App'>
        <input onChange={getInputValue} />
        {inputValue}
    </div>
)

// Color change
const [textColor, setTextColor] = useState('green');

return (
    <div className='App'>
        <button onClick={() => {
            setTextColor(textColor === 'green' ? 'red' : 'green')
        }}>
            Change Color
        </button>

        <h1 style={{ color: textColor }}>My name is Shaik Sirajuddin</h1>
    </div >
)

// Display/Hide Text
const [textDisplay, setTextDisplay] = useState(true);

return (
    <div className='App'>
        <button onClick={() => {
            setTextDisplay(!textDisplay);
        }}>
            Display/Hide Text
        </button>

        {textDisplay && <h1 style={{ color: 'green' }}>My name is Shaik Sirajuddin</h1>}
    </div >
)


