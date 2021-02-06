import React from 'react';
import './Input.css'

function Input({filter , setFilter}) {
    return (
        <div className='input'>
            Search Movie :- <input value={filter} onChange={(event)=>{
                setFilter(event.target.value)
            }} />
        </div>
    )
}

export default Input
