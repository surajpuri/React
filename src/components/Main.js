import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import App from '../App'
import About from './About'
import Contact from './Contact'

export default function Main() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>

            </ul>
<Route exact path='/'>
<App/>

</Route>
<Route path='/about'>
<About/>

</Route>
<Route path='/contact'>
<Contact/>

</Route>       
            
        </div>
        </Router>
    )
}
