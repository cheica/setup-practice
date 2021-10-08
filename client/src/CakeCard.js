import { Button } from 'react-bootstrap';

function CakeCard(props){

    return (
            
        <div>

            <h2 class = "cake123">{props.eachCake.name}</h2>

        <div className="cakeForm">
        <img className='cakeCard' src ={props.eachCake.image} alt=" cake"/>
        <Button className='button1' onClick={props.cakeClick} variant="warning">Delete Cake </Button>
            {/* <Button onClick={ e => deleteCake(eachCake.id)}variant="warning">Delete Cake </Button>  */}
        <h3 class ="cakeText">{props.eachCake.ingredients}</h3>
        <h4 className = "cakeText2"> Anonymous user: {props.eachCake.user_id}</h4>
        </div>
        </div>
        
       
    )



}
export default CakeCard;