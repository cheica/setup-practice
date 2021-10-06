import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import AllCakes from './AllCakes';



function App () {

  const [cakes, setCakes] = useState([])

      useEffect( () => {
      fetch("/cakes")
      .then(response => response.json())
      .then(fetchedCakes => {console.log("from Fetch: ", fetchedCakes)
          setCakes(fetchedCakes)

          }
          
          )},

      []);

  return (
    <> 
    <AllCakes
      cakesToRender={cakes}
      /> 

    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Chelsea</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
