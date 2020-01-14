
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super (props)
        this.state ={counts:0}
    }
 increaseCount=()=>{
    this.setState({counts:this.state.counts + 1} )
    }

    render(){
        
        return (
            <div>
            <h2>you have clicked{this.state.counts}times</h2>
            <button onClick={this.increaseCount}>Click</button>
            </div>
        )
    }
}
    