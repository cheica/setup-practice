 import {useState, useEffect} from 'react';
 import { Link } from 'react-router-dom';



 function LogIn (){

    const [userKnocking, setUserKnocking] = useState( "" )
    console.log("In Form Username", userKnocking)

    const [currentUser2, setCurrentUser2] = useState( {} )

    const [anyoneThere, setAnyoneThere] = useState(false)

    function logInType (synthEvent) {
        setUserKnocking(synthEvent.target.value)
    }

    function handleUNLogIn (synthEvent) {
            synthEvent.preventDefault()
            console.log("In Handle UN LogIN")



            fetch('/login', {
                method: "POST", 
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({username: userKnocking})
            })
            
            
            .then(response => response.json())
            .then(loggedInUser => {console.log("We are logged in: ", loggedInUser)
                setCurrentUser2(loggedInUser)
                
                setAnyoneThere(true)
            })

    }

    const isThereSomeone =()=> {
        console.log("InIsThereSomeone")

        return anyoneThere ?
        (<button>LOGOUT</button>)
        :
        (<></>)
    }

    // function handleUNLogOut (synthEvent) {
    //     synthEvent.preventDefault()
    //     console.log("In Handle UN LogIN")

    //     fetch('/login', {
    //         method: "DELETE", 
    //         // headers: {'Content-Type' : 'application/json'},
    //         // body: JSON.stringify({username: userKnocking})
    //     })
        
        
    //     .then(response => response.json())
    //     .then(loggedInUser => {console.log("We are LEAVING: ", loggedInUser)
    //         setCurrentUser2({})
    //         setAnyoneThere(false)
    //     })


    // }

    function renderLogIn(){

       return (
        <form onSubmit= {handleUNLogIn}> 
        <label className="button"> Username:  </label> 
        <input className="input" type="text" value={userKnocking} onChange={logInType}/>
        <label className="button"> Password:  </label>
        <input className="input" type="password"/>
        <Link to = "/cakes"> 
        <button className="button">LogIn</button>
         </Link>
        
        {/* <input type="submit" value= "Login"/> */}


    </form>

       )

        
    }

    return (

        <>
        {renderLogIn()}
        {isThereSomeone()}
        </>
    ) 

    }

 export default LogIn;