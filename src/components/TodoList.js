import React, { Component } from 'react'
import axios from 'axios'
//view 

export default class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response)=>{
            console.log(response);
            this.setState({
                todos:response.data
            })

        }).catch((err)=>console.log(err))

    }
    render() {
        return (
            <div>
               List of Todos 
               {this.state.todos.map((todo)=>{
                   return<li key={todo.id}> {todo.title}</li>
               })}
            </div>
        )
    }
}
