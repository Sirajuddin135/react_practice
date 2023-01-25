import './App.css';

function App() {
  return (
    <div className="App">
      <User name="Sirajuddin" age={26} email="sirajuddin@gmail.com" />
      <Job role="CEO" company="Siraj & Co." salary={200000} />
      <User name="Shaik" age={25} email="shaik@gmail.com" />
      <Job role="SDE-2" company="Siraj & Co." salary={120000} />
      <User name="Siraj" age={24} email="siraj@gmail.com" />
      <Job role="SDE-1" company="Siraj & Co." salary={90000} />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h2>{props.company}</h2>
      <h3>{props.role}</h3>
      <h4>{props.salary}</h4>
    </div>
  )
}

export default App;
