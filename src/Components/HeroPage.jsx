import React from 'react'

const HeroPage = () => {
  return (
    <>
    <section className="w-full h-[500px] bg-gray-100 flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
        {/* <!-- Left Text Section --> */}
        <div className="text-center md:text-left space-y-4">
            <h3 className=" text-xl m-3 text-black relative top-[5rem] animate">Women Collection 2038</h3>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-wide text-4xl font-bold m-3 text-black relative top-[5rem]">NEW ARRIVALS</h1>
            <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all w-35 h-10 m-3 relative top-[5rem] rounded-3xl bg-blue-400">
                SHOP NOW
            </button>
        </div>
    
        {/* <!-- Right Image Section --> */}
         <div className="mt-8 md:mt-0 w-full md:w-auto">
            <img src="src/assets/img/banner.png" alt="Women Collection" className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-md mx-auto"/>
        </div>

    </section>
    
    <section className="flex flex-col md:grid grid-cols-1 lg:grid grid-cols-3 gap-4 m-5">
        <div className="bg-[url(https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp)] bg-cover bg-center w-115 h-45 border border-gray-500 place-self-center hover:opacity-50 hover:bg-blue-300 md:w-65 h-50 lg:w-100 h-50">
            <p className="font-bold text-3xl pl-5 pt-5">Women</p>
            <p className="text-md pl-5">Spring 2018</p>
        </div>
        
        <div className="bg-[url(https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp)] bg-cover bg-center w-115 h-45 border border-gray-500 place-self-center hover:opacity-50 hover:bg-blue-300 md:w-65 h-50 lg:w-100 h-50">
            <p className="font-bold text-3xl pl-5 pt-5">Men</p>
            <p className="text-md pl-5">Spring 2018</p>
        </div>

        <div
            className="bg-[url(https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp)] bg-cover bg-center w-115 h-45 border border-gray-500 place-self-center hover:opacity-50 hover:bg-blue-300 md:w-65 h-50 lg:w-100 h-50">
            <p className="font-bold text-3xl pl-5 pt-5">Accessories</p>
            <p className="text-md pl-5">Spring 2018</p>
        </div>

    
     </section>
    </>
  )
}

export default HeroPage