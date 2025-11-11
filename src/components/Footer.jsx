import React from 'react'
import { WaveDivider } from './WaveDivider'

const Footer = () => {
    const QuickLinks = ['Home', 'About', 'Services', 'Doctors', 'Blog', 'Contact'];
    const Services = ['Teeth Whitening', 'Teeth Cleaning', 'Quality Braces', 'Dental Implants']
    const contactUs = [
        { name: '123 Duden Road, Dental City, DC 12345', icon: 'fa-map-marker-alt' },
        { name: '+ (123) 456 7890', icon: 'fa-phone-alt' },
        { name: 'info@dentacare.com', icon: 'fa-envelope' }
    ]
    return (
        <div className='bg-blue-900 text-white relative'>
            {/* wave divider */}
            <WaveDivider />
            <div className='w-[1000px] mx-auto px-6 py-12'>
                <div className='flex gap-6'>
                    <div class="w-[250px]">
                        <h3 class="text-lg font-semibold mb-4 text-indigo-300">DentaCare</h3>
                        <p class="text-gray-300 text-sm">A small river named Duden flows by, offering a serene dental
                            experience.</p>
                    </div>
                    <div className='w-[250px]'>
                        {/* Quick Links */}
                        <h3 class="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
                        <ul>
                            {QuickLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Services */}
                    <div className='w-[250px]'>
                        <h3 class="text-lg font-semibold mb-4 text-indigo-300">Services</h3>
                        <ul className='space-y-2 text-sm'>
                            {Services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/*Contact US  */}
                    <div className='w-[250px]'>
                        <h3 class="text-lg font-semibold mb-4 text-indigo-300">Contact Us</h3>
                        {contactUs.map((contact, index) => (
                            <p key={index} className='text-gray-300 text-sm flex items-center'>
                                <i className={`fas mr-2 text-indigo-300 ${contact.icon}`}></i>
                                <a href="#">{contact.name}</a>

                            </p>
                        ))}
                        <div className='flex space-x-4 mt-4'>
                            <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i
                                class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i
                                class="fab fa-twitter fa-lg"></i></a>
                            <a href="#" class="text-gray-300 hover:text-indigo-400 transition-all duration-300"><i
                                class="fab fa-instagram fa-lg"></i></a>
                        </div>
                    </div>

                </div>
                <div className='text-center mt-8 text-gray-300 text-sm'>
                    <p>© 2025 DentaCare. All Rights Reserved.</p>
                </div>

            </div>

        </div>
    )
}

export default Footer