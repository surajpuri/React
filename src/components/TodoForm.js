import React, { Component } from 'react'
import axios from 'axios'
//add
export default class TodoForm extends Component {
    constructor(props){
        super(props)
        this.state={
            userId:1,
            title:'',
            completed:false
        }
    }
    handleTitleChange=(event)=>{
        this.setState({
            title:event.target.value
        })

    }
    handleClick=(event)=>{
        event.PreventDefault();
        axios.post('https://jsonplaceholder.typicode.com/todos',this.state)
        .then((response)=>{
            console.log(response)

        }).catch((err)=>console.log(err));
       
    }
    render() {
        return (
            <div>
                Todo Form
                <form>
                    <input type='text' value={this.state.title}onChange={this.handleTitleChange}/>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                
            </div>
        )
    }
}
