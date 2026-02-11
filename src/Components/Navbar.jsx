import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="font-bold text-xl">
                    <NavLink to="/">Storefront</NavLink>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className="hover:text-blue-600 font-bold">Home</NavLink>
                    <NavLink to="/product" className="hover:text-blue-600">Product</NavLink>
                </div>

                {/* Search and Cart */}
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden sm:block p-2 border rounded-md"
                    />

                    <NavLink to="/cart" className="relative">
                        <span className="text-xl">🛒</span>
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full">
                            {cartCount}
                        </span>
                    </NavLink>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 border rounded"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? 'X' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 bg-gray-50 p-4 rounded-md space-y-2">
                    <NavLink to="/" className="block" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/product" className="block" onClick={() => setMenuOpen(false)}>Product</NavLink>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 border rounded-md mt-2"
                    />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
