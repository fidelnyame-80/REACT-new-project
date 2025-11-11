import React from 'react'

const Testimonials = () => {
const patientTestimonials = [
{name: 'John Doe', comment: 'The best dental experience! The staff is friendly and the environment is so calming.'},
{name: 'Jane Smith', comment: 'I was nervous, but the team made me feel so comfortable. Highly recommend!'},
{name: 'Emily Johnson', comment: 'Professional and efficient. My teeth have never looked better!'}
]
    return (
        <div className='py-20 bg-gray-100'>
            <div className='w-[1000px] mx-auto px-6'>
                <h2 className='text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight'>What Our Patients Say</h2>
                <p className='text-gray-600 text-center mb-12 w-[700px] mx-auto'>A small river named Duden flows by their place, offering a serene dental experience.</p>
                <div className='flex gap-6'>
                    {patientTestimonials.map((testimonial, index) =>(
                        <div key={index} className='w-[333px] bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600'>
                            <p className='text-gray-600 mb-4'>
                            {testimonial.comment}
                            </p>
                            <p  className='font-semibold text-gray-800'>
                            {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Testimonials