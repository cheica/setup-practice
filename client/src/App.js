
// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
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
    // ------------------
    const [cakeName, setCakeName] = useState("")
    const [pic, setPic] = useState("")
    const [ings, setIngs] = useState("")
      // Handle cake[NAME] typing and SetCakeNAME
      function handleCKType(e) {
        console.log("I'm typing this: ", e.target.value)
        //setcakename here vvv
        setCakeName(e.target.value)
        console.log("This is the new Name:", cakeName)
       }
      function handlePicType(e) {
        console.log("I'm typing this: ", e.target.value)
        //setcakepic here vvv
        setPic(e.target.value)
        console.log("This is the new Pic:", pic)
      }
    function handleIngType(e) {
      console.log("I'm typing this: ", e.target.value)
      //setcakepic here vvv
      setIngs(e.target.value)
      console.log("This is the new Pic:", ings)
    }

    function handleSubmit(e) {
      console.log("Im in the handlesubmit")
      e.preventDefault();
      let newCake = {
        "name": cakeName,
        "image": pic,
        "ingredients": ings,
        "user_id": 4,
      }
      fetch("/cakes",{
        method: 'POST',
        headers: { "Content-type" : "application/json",
        },
      body: JSON.stringify(newCake)
      
      })
      .then(response => response.json())
      .then(singleCake => {
        console.log(singleCake)
        setCakes([...cakes, singleCake])
      })

    }
    function deleteCake (cakieID){
      //  
      console.log(`delete  called: ${cakieID}`);
      // console.log(`delete  called: ${cakeId.name}`);

      fetch (`/cakes/${cakieID}`, { 
          method: "DELETE"
          // headers: {"Content-Type" : "application/json"},
          // body: JSON.stringify(cakeId)
      
      
  
      
  })
      .then(response => response.json())
      .then(toRemove => {console.log("Removing this", toRemove)
          let filterCakes = cakes.filter(eachCake => 
              eachCake.id != cakieID)
              setCakes([...filterCakes])
          })
          
          }
      

  
  return (
    <div>
      <BrowserRouter>
    <Switch>
      <Route path="/cakes">
    <AllCakes
      cakesToRender={cakes}
      cakeNameType = {handleCKType}
      cakePicType = {handlePicType}
      cakeIngType = {handleIngType}
      submitActions = {handleSubmit}
      deleteButton ={deleteCake}
      // logInstuff ={renderSignupAndLogin()}

      />
      </Route>
      <Route path="/Home" exact component={Home} />
            <Route path="/Aboutus" exact component={About} />
            <Route path="/" exact component={Home} />
    </Switch>
    </BrowserRouter>
    </div>
  );
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