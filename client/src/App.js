
// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LogIn from './Login';
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
      const newCakie = document.getElementById("cakieName").value;
      let newCake = {
        "name": newCakie,
    
        "image": pic,
        "ingredients": ings,
        "user_id": 1,
      }
      console.log(cakeName);
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

    // const [cakeName1, setCakeName1] = useState([])
    //   useEffect( () => {
    //   fetch("/cakes")
    //   .then(response => response.json())
    //   .then(fetchedCakes => {console.log("from Fetch: ", fetchedCakes)
    //       setCakes(fetchedCakes)
    //       }
    //       )},
    //   []);
    // ------------------
    const [cakeName1, setCakeName1] = useState("")
   
      // Handle cake[NAME] typing and SetCakeNAME
      function handleCKType(e) {
        console.log("I'm typing this: ", e.target.value)
        //setcakename here vvv
        setCakeName1(e.target.value)
        console.log("This is the new Name:", cakeName1)
       }

    function handleSubmit1(e,cakeID) {

      
      console.log("Im in the handlesubmit", cakeID)
      e.preventDefault();
      const newCakeName = document.getElementById(`changeName-${cakeID}`).value;
      console.log(newCakeName)
      let newCake1 = {
        "name": newCakeName,
      }
      fetch(`/cakes/${cakeID}`,{
        method: "PATCH",
        headers: { "Content-type" : "application/json",
        },
      body: JSON.stringify(newCake1)
      
      })
      .then(response => response.json())
      .then(singleCake1 => {
        

         let filterCakes = cakes.filter(eachCake => 
          eachCake.id != singleCake1.id)
          setCakes([singleCake1, ...filterCakes])
        //   console.log(singleCake1)
        //  setCakes([singleCake1, ...cakes])

      })
  
      fetch("/cakes")
      .then(response => response.json())
      .then(fetchedCakes => {console.log("from Fetch: ", fetchedCakes)
          setCakes(fetchedCakes)
          }
          )

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
      patchActions ={handleSubmit1}
      deleteButton ={deleteCake}
      // logInstuff ={renderSignupAndLogin()}

      />
      </Route>
      <Route path="/Home" exact component={Home} />
            <Route path="/Aboutus" exact component={About} />
            <Route path="/" exact component={Home} />
            <Route path ="/login" exact component={LogIn}/>
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