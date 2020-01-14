import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        },console.log(this.state.username))

    }
    
    render() {
        return (
            <div>
                My Form
                <form> 
                    <div>
                        <label>Username:</label>
                        <input type="text" value={this.state.username}onChange={this.handleUsernameChange}/>
                    </div></form>
            </div>
        )
    }
}
