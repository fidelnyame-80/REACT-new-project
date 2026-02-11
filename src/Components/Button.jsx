import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <div>
            <button className='bg-blue-500 rounded-md p-2 px-5 text-white' onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button