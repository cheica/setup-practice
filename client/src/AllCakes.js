import React, {useState, useEffect}  from 'react';
import { Button } from 'react-bootstrap';
import './App.css'
import Vector2 from './frame@1x.svg'
import Vector from './frame-1@2x.svg';
import CakeCard from './CakeCard'
function AllCakes (props) {
    console.log(props.deleteButton)

    // function handleMyCakeClick (event) {
    //     console.log("this is my cakie:", event.target.name.value)
            
    //     props.deleteButton(cakie)
    //   }

    // const[newCakes, setNewCakes] = useState( [] )

    // useEffect( () => {
    //     fetch ("/cakes")
    //            .then((response) => response.json())
    //            .then(fetchedCakes => {console.log(fetchedCakes)
    //            setNewCakes(fetchedCakes)
    //          })
               
    //          }, [])


                
                //   DELETE FUNCTION 

                //   function deleteCake (cakeId){
                //     //  
                //     console.log(`delete  called: ${cakeId}`);
                //     // console.log(`delete  called: ${cakeId.name}`);
    
                //     fetch (`/cakes/${cakeId}`, { 
                //         method: "DELETE",
                //         headers: {"Content-Type" : "application/json"},
                //         body: JSON.stringify(cakeId)
                    
                    
                
                    
                // })
                //     .then(response => response.json())
                //     .then(toRemove => {console.log("Removing this", toRemove)
                //         let filterCakes = newCakes.filter(eachCake => 
                //             eachCake.id != cakeId)
                //             setNewCakes([...filterCakes])
                //         })
                //         return newCakes
                //         }
            //     const [nameBeingEdited, setNameBeingEdited] = useState( "" )
            //     console.log("In Form - usernameBeingEdited: ", usernameBeingEdited)
            //       const typingNameBeingEdited =(sythEvent)=>{
        
            //         setNameBeingEdited(sythEvent.target.value)
        
            //       }
        
            //   const handleEditCakeAccount =(sythEvent)=> { 
            //     sythEvent.preventDefault()
            //     // console.log(sythEvent)
            //     // console.log("In handleUserLogin")
            //     console.log("❗️❗️ REMEMBER THE BYEBUG ❗️❗️")
        
        
            //     fetch(`/cakes/${name.id}`, {
        
            //       method: "PATCH",
            //       headers: { 'Content-Type': 'application/json' },
            //       body: JSON.stringify({ cakeName: nameBeingEdited })
        
            //     })
            //     .then(r => r.json())
            //     .then(editedCake =>{  console.log("WOW✨  >>  ", editedCake)  //
        
            //       setCurrentUser(editedCake)
            //       // Saying Now NO-ONE is Logged In
        
            //     })      
        
            //   }
        
    
                

                
                 
                
                       
console.log(props)
const mapCakes = () => {
    
    let mappedCakes = props.cakesToRender.map(eachCake  => {
        
        return (
            
            <div>
    
                <h2 className = "cake123">{eachCake.name}</h2>

            <div className="cakeForm">
            <img className='cakeCard' src ={ eachCake.image} alt=" cake"/>
            {/* <Button className='button1' onClick={handleMyCakeClick} variant="warning">Delete Cake </Button> */}
                 <Button className='button1' onClick={ (e) => props.deleteButton(eachCake.id)}variant="warning">Delete Cake </Button> 
                 <Button className='button1' onClick={(e) => props.patchActions(e, eachCake.id)}type ="submit">Update Name </Button>  

                 <form onSubmit={props.submitActions}>
            <label classname="SamText">Name</label>
            <input className="input" id={`changeName-${eachCake.id}`} type="text" />
            
            {/* <input className="button" type="submit" value="SUBMIT" /> */}
        </form>
            <h3 class ="cakeText">{eachCake.ingredients}</h3>
            <h4 className = "cakeText2"> Anonymous user: {eachCake.user_id}</h4>
            </div>
            </div>
            
           
        )
    })
    return mappedCakes;
    
}



return (
    <>
    
    
         

        <form onSubmit={props.submitActions}>
            <label className="button">Name</label>
            <input className="input" id="cakieName" type="text"/>
            <label className="button">Image</label>
            <input className="input" type="text" onChange={props.cakePicType}/>
            <label className="button" >Ingredients</label>
            <input className="input" type="text" onChange={props.cakeIngType}/>
            {/* <label>User</label>
            <input type="text"/>  */}
            <input className="button" type="submit" value="SUBMIT" />
        </form>
        
        {mapCakes()}
   
        </>
        
)

}

export default AllCakes;

