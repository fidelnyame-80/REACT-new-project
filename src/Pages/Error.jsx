import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className='text-center mt-30'>
    <h1 className='text-4xl mb-5 font-bold '>OOooops]::)</h1>
    <h2 className='text-3xl mb-6'>Nothing here</h2>
    <Link to="/" className='text-2xl bg-blue-700 text-white rounded-md hover:bg-blue-900 p-1'>Return to Home</Link>
   </section>
  )
}

export default Error