import React from 'react';

function AllCakes (props) { 

console.log(props)

const mapCakes = () => {
    let mappedCakes = props.cakesToRender.map(eachCake => {
        return (
            <div>
            <h2>{eachCake.name}</h2>
            <img src ={ eachCake.image}/>
            <h3>{eachCake.ingredients}</h3>
            </div>
        )
    })
    return mappedCakes;
}

return (
    <>
        <h1>Hello</h1>
        {mapCakes()}
    
    </>
)

}

export default AllCakes; 