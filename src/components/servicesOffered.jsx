import React from 'react'

const ServicesOffered = () => {
    const services = [
        {icon: "fa-tooth", title:'Teeth Whitening'}, 
        {icon: "fa-teeth-open", title:'Teeth Cleaning'},
        {icon: "fa-ruler-combined", title:'Quality Brackets'},
        {icon: "fa-tooth" , title:'Dental Implants'},
        ]
  return (
    <div className='py-16 bg-white'>
        <div className='w-[1000px] mx-auto px-6'>
            <div className='flex gap-6 text-center'>
            {services.map((service, index) =>(
                <div key={index} className='w-[250px] bg-gradient-to-b from-gray-50 to-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                    <i className={`fas ${service.icon} text-4xl text-indigo-600 mb-4`}></i>
                        <h3 className='text-xl font-semibold text-gray-800' >
                            {service.title}
                        </h3>
                    
                </div>
            ))}
            </div>

        </div>

    </div>
  )
}

export default ServicesOffered;