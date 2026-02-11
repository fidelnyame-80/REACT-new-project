import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <section className='bg-gray-100 m-10 rounded-md '>
            <div className='lg:flex md:flex'>
                {/* one */}
                <div className='p-9'>
                    <h3>NEW ARRIVALS</h3>
                    <h1 className='font-bold text-3xl my-4'>Discover the <br /> Summer 2025 <br /> Collection</h1>
                    <p className='mb-4'>Explore lightweight fabrics, vibrant <br /> colors, and  modern cuts designed for the season.</p>
                    <Link to="/product"><Button text="Shop Collection" /></Link>
                </div>
                {/* two */}
                <div >
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" alt="Dress" className='w-250 h-120 object-cover rounded-r-md' />
                </div>
            </div>
        </section>

    )
}
