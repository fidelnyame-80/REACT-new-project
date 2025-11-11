import React from 'react'

const DoctorSection = () => {
    const docDetails = [
        {name: 'Maria Howard', role:'Dentist', imgSrc: "https://i.pinimg.com/1200x/e5/7a/ba/e57aba2b5a5f17916a75a8ff2f194367.jpg"},
        {name: 'Abigail Jacobson', role: 'Dentist', imgSrc: "https://i.pinimg.com/736x/d6/df/70/d6df70b47cf80e19b1abccd380ff2bbf.jpg"},
        {name: 'Dylian Mosokou', role: 'Dentist', imgSrc: "https://i.pinimg.com/736x/89/97/65/899765695f83ad535483cc936be3b8a2.jpg"},
        {name:'Joshua Howard', role: 'Dentist', imgSrc: "https://i.pinimg.com/736x/59/da/aa/59daaa07f0d77563235acad6fd53c2c0.jpg"}
    ]
  return (
    <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='w-[1000px] mx-auto px-6'>
            <h2 className='text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight'> </h2>
            <div className='flex gap-7'>
            {docDetails.map((detail, index)=>(
                <div key={index} className='w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl'>
                    <img src={detail.imgSrc} alt="" className='w-full h-48 object-cover object-[20%10%]'/>
                    <div className='p-4'>
                        <h3 className='text-xl font-bold text-gray-800 mb-2'>{detail.name}</h3>
                        <p className='text-gray-600'>{detail.role}</p>

                    </div>
                </div>
            ))}
            </div>
        </div>

    </div>
  )
}

export default DoctorSection