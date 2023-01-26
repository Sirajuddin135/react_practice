export const User = (props) => {
    return (
        <div>
            {props.name} - {props.age} - {props.email}
        </div>
    );
}

export const Job = (props) => {
    return (
        <div>
            <h2>{props.company}</h2>
            <h3>{props.role}</h3>
            <h4>{props.salary}</h4>
        </div>
    )
}

// Copy and paste the below code inside App() function in App.js file

// JSX, Components, Props
// return (
// <div className="App">
//   <User name="Sirajuddin" age={26} email="sirajuddin@gmail.com" />
//   <Job role="CEO" company="Siraj & Co." salary={200000} />
//   <User name="Shaik" age={25} email="shaik@gmail.com" />
//   <Job role="SDE-2" company="Siraj & Co." salary={120000} />
//   <User name="Siraj" age={24} email="siraj@gmail.com" />
//   <Job role="SDE-1" company="Siraj & Co." salary={90000} />
// </div>
// );

// Lists
// const users = [
//     { name: "Shaik", age: 23, email: "shaiksirajuddin135@gmail.com" },
//     { name: "Sirajuddin", age: 24, email: "shaiksirajuddin135@gmail.com" },
//     { name: "Siraj", age: 25, email: "shaiksirajuddin135@gmail.com" },
//     { name: "Shaik Sirajuddin", age: 26, email: "shaiksirajuddin135@gmail.com" }
// ];

// return (
//     <div className='App'>
//         {
//             users.map((user, key) => {
//                 return <User name={user.name} age={user.age} email={user.email} />
//             })
//         }
//     </div>
// )