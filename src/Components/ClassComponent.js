import React from "react";


class Learning extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Fruits:[
                {name:"Mango", weight:"10kg"},
                {name:"orange", weight:"50kg"},
                {name:"Mango", weight:"120kg"},
            ],
        };
    };
    HandelEvent= () => {
        // console.log("clicked");
        // alert("Clicked :")
        this.setState({
            Fruits:[
                {name:"Samsung", weight:"10kg"},
                {name:"Apple", weight:"50kg"},
                {name:"Nokia", weight:"120kg"},
            ],
        });
    };
    
    render(){
        return <div>
            <button onClick={this.HandelEvent}>Click To Load</button>
            <h1>"Fruit Name is" {this.state.Fruits[0].name} </h1>
            <h1>"Fruit Name is" {this.state.Fruits[1].name} </h1>
            <h1>"Fruit Name is" {this.state.Fruits[2].name} </h1>
        </div>
           
    }
}

export default Learning;