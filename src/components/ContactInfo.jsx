import React from 'react'

export const ContactInfo = () => {
    return (
        <div className='w-[500px]'>
            <div className='bg-blue-900 text-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300'>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4 flex items-center">
                    <i className="fas fa-map-marker-alt mr-2 text-indigo-300"></i>
                    123 Duden Road, Dental City, DC 12345
                </p>
                <p className="mb-4 flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-indigo-300"></i>
                    <a href="tel:+1234567890" className="hover:text-indigo-300 transition">+ (123) 456 7890</a>
                </p>
                <p className="mb-4 flex items-center">
                    <i className="fas fa-envelope mr-2 text-indigo-300"></i>
                    <a href="mailto:info@dentacare.com"
                        className="hover:text-indigo-300 transition">info@dentacare.com</a>
                </p>
                <p className="mb-6 flex items-center">
                    <i className="fas fa-clock mr-2 text-indigo-300"></i>
                    Mon-Fri 9 AM - 5 PM
                </p>

            </div>
        </div>
    )
}
