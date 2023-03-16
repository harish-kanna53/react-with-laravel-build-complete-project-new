import React, { useState } from "react";



  function RenderHook(props){

    const [fruitState, setfruitState] = useState({
        //Create the Object inside
        Fruits:[
            {name:"Mango", weight:"10kg"},
            {name:"orange", weight:"50kg"},
            {name:"Lemon", weight:"120kg"},
        ],       
    });

    const HandelClick = () => {
        setfruitState({
            Fruits:[
            {name:"Samsung", weight:"10kg"},
            {name:"Hundy", weight:"50kg"},
            {name:"Lenovo", weight:"120kg"},
        ]
    })};

    return(
        <div>
            <button onClick={HandelClick}>Click me</button>
            <h1>Fruit Name is {fruitState.Fruits[0].name}</h1>
        </div>
    )
    
 } 


export default RenderHook;




















//========================================================
// function Hello(props){
//     return <h1>{props.name} & {props.weight}</h1>
// }

// export default Hello;