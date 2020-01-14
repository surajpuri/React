import React from 'react'

export default function PersonList() {
    const persons=[
        {
            id:1,
            name:'Ram',
            age:24
        },
        {
            id:2,
            name:'Shyam',
            age:25
        },
        {
            id:3,
            name:'Gita',
            age:23
        },
        {
            id:4,
            name:'Sita',
            age:22
        }

    ]

    return (
        <div>
            <h2>Person List</h2>
            <ul>
                {persons.map((person)=>{
                    return<li key>{person.id}>I am {person.name},and I am {person.age} years old.</li>
                })}

            </ul>
        </div>
    )
}
