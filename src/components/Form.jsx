import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState()
    const handle = (e)=>{
        e.preventDefault()
        console.log(e.target.name.value)
    }

    return (
        <div>
            <p>{name}</p>
            <form  onSubmit={handle}>
                <input  type="text" name="name" id="" className='border ' onChange={(e)=> setName(e.target.value)} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}