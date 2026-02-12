import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <nav className="flex justify-between text-center items-center py-4  bg-gray-200 text-black space-x-4">
            <h1 className="text-2xl font-bold itaclic w-50">COZA STORE</h1>
    
            <ul className="flex space-x-4 group hidden md:flex block lg:flex block">
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110">Home</a></li>
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110">About</a></li>
                <span className="bg-red round-full mt-[-10] hidden">hot</span>
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110 hidden">Features</a>
                </li>
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110">Blog</a></li>
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110 hidden">Account</a>
                </li>
                <li><a href="#"
                        className="text-black hover:text-blue-200 transition-transform transform hover:scale-110">Contact</a>
                </li>
            </ul>
    
            {/* <!-- icon section --> */}
            <div className="flex space-x-4 text-black">
                <i className="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-regular fa-heart"></i>
            </div>
        
        </nav>
    </div>
      
    </>
  )
}

export default Navbar
