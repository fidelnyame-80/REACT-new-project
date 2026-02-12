import React, { useState } from 'react'
// import StudentStore from '../Store/contactStore'
import StudentStore from '../Store/StudentStore'


const Forms = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    const addNewUser = StudentStore((state) => state.addNewUser)

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleContact = (e) => {
        setContact(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            name,
            contact,
        }

        addNewUser(newUser)

        setName("")
        setContact("")
    }
    return (
        <section className='border-1 rounded w-100 p-4 border-gray-300 shadow h-80'>
            <h1 className='text-center text-xl underline py-3'>Student Form</h1>
            <form onSubmit={handleSubmit}>

                <label>Name </label>
                <input type="text" value={name} onChange={handleName} required placeholder='Your name' className='w-full border-1 p-1 rounded border-gray-300' />
                <br /><br />
                <label>Contact </label>
                <input type="tel" value={contact} onChange={handleContact} required placeholder='Your number' className='w-full border-1 p-1 rounded border-gray-300'/>
                <br /><br />
                <div className='text-center'>
                <button className='p-2 bg-blue-700 w-40 hover:bg-blue-800 text-white rounded'>Submit</button>
                </div>

            </form>
        </section>
    )
}

export default Forms;