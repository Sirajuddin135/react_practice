export const Planet = (props) => {
    return <div>
        {props.name} {props.isGasPlanet}
    </div>
}

// Lists
// const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true }
// ];

// return (
//     <div className='App'>
//         {
//             planets.map((planet, key) =>
//                 planet.isGasPlanet && <Planet name={planet.name} />
//             )
//         }
//     </div>
// )