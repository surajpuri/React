import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:'VISIT NEPAL 2020'
             
        }
    }
    handleClick=()=>
        {
            //alert("you have clicked it!");
            this.setState({message:'NEPALESE, YOU WON THE GAME'})
        }
    

      
    
    render() {
        return (
            <div>
                <h2>NAMASTEY,{this.state.message}</h2>
                <button onClick={this.handleClick}>Click me !</button>

            </div>
        )
    }
}
