import React from 'react'

const ContactForm = () => {
    return (
        <div className='w-[500px]'>
            <div className='bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-600 hover:shadow-2xl transition-all duration-300'>
                <form>
                    <select
                        className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                        <option value="">Select Inquiry Type</option>
                        <option value="appointment">Appointment</option>
                        <option value="billing">Billing</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    <input type="text" placeholder="Name"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></input>
                    <input type="email" placeholder="Email"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></input>
                    <textarea placeholder="Message"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"></textarea>
                    <button type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-3 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md">
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ContactForm