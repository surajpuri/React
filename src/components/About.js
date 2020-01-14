import React from 'react'
import './About.css'
import contact from './Contact'
const myinlineStyle={
    'font-size':'24px',
    'color':'red'
}

export default function About() {
    return (
        <div>
            <h1 className='my'>About page</h1>
            <h2 style={myinlineStyle}>Inline css</h2>
            
        </div>
    )
}
