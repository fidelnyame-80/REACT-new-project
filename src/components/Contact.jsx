import React from 'react'
import { WaveDivider } from './WaveDivider'
import ContactForm from './ContactForm'
import { ContactInfo } from './ContactInfo'

const Contact = () => {
  return (
    <div className='py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative'>
        <div className='w-[1000px] mx-auto px-6'>
            {/* wave divider */}
        <WaveDivider />
        <h2 class="text-4xl font-extrabold text-center text-gray-800 mb-4 pt-12 tracking-tight">Get in Touch</h2>
            <p class="text-gray-600 text-center mb-12 w-[700px] mx-auto">
                A small river named Duden flows by, creating a serene setting for your inquiries.
            </p>
            <div className='flex gap-8'>
                {/* Contact Form */}
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
        
    </div>
  )
}

export default Contact