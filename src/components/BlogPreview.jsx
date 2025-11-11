import React from 'react'

const BlogPreview = () => {
    const blogCards = [
        {title: 'Top 5 Tips for a Brighter Smile', post: 'Learn how to maintain a healthy and bright smile with these simple tips.', imgSrc: "https://i.pinimg.com/736x/3d/c8/04/3dc804c4d39284d7e7efc7930a02a504.jpg"},
        {title: 'Benefits of Regular Checkups', post: 'Discover why regular dentist visits are crucial for oral health.', imgSrc: "https://i.pinimg.com/736x/90/d1/6d/90d16dfbfaedcc307a59d9c1cb5aed61.jpg"},
        {title: 'Understanding Dental Implants', post: 'Everything you need to know about dental implants.', imgSrc: "https://i.pinimg.com/736x/8b/68/0d/8b680da66ba87d7872d5b02f2b301c12.jpg"}
    ]
    return (
        <div className='py-20 bg-white'>
            <div className='w-[1000px] mx-auto px-6'>
                <h2 className='text-4xl font-extrabold text-center text-gray-800 mb-4 tracking-tight'></h2>
                <p className='text-gray-600 text-center mb-12 w-[700px] mx-auto'>
                    Stay updated with our latest dental care tips and news.
                </p>
                <div className='flex gap-6'>
                {blogCards.map((card, index) =>(
                    <div key={index} className='w-[333px] bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                        <img src={card.imgSrc} alt="" className='w-full h-48 object-cover rounded-lg mb-4'/>
                        <h3 className='text-xl font-semibold text-gray-800 mb-2'>{card.title}</h3>
                        <p className='text-gray-600 mb-4'>{card.post}</p>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 transition-all duration-300'>Read More</a>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPreview