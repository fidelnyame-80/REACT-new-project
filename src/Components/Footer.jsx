import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-50 p-10'>
            <div className='flex justify-around'>
                {/* one */}
                <div className='space-y-5'>
                    <h1 className='font-bold'>StoreFront</h1>
                    <p>Your destination for premium fashion and <br /> lifestyle products. Quality crafted for <br /> everyday living.</p>

                </div>
                {/* two */}
                <div className='space-y-5'>
                    <h1 className='font-bold'>Shop</h1>
                    <p>New Arrivals</p>
                    <p>Best Sellers</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Accessories</p>
                </div>
                {/* three */}
                <div className='space-y-5'>
                    <h1 className='font-bold'>SUPPORT</h1>
                    <p>Help Center</p>
                    <p>Order Status</p>
                    <p>Returns & Exchanges</p>
                    <p>Shipping Info</p>
                    <p>Contact Us</p>
                </div>
                {/* four */}
                <div className='space-y-5'>
                    <h1 className='font-bold'>COMPANY</h1>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Sustainability</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

            <div>
                <p>© 2025 Storefront Inc. All rights reserved.</p>
            </div>
        </footer >
    )
}

export default Footer