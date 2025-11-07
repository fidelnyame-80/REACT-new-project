import React from 'react'
import Follow from './follow button'

const Card = ({ name, title, image, followers }) => {
  return (
    <>
      <div className='relative w-[19rem] h-[23rem] bg-black/40 rounded-xl overflow-hidden shadow-lg'>
        <img src={image} alt="img" className='object-cover inset-0 absolute w-full h-full'/>

              <div className="absolute inset-0 bg-black/30"></div>

        <div className='absolute top-3 pl-5 text-white text-lg font-[600] font-[Allura,cursive] text-[1.5rem]'>
          {title}
        </div>

        <div className='absolute bottom-0 pb-3 flex backdrop-blur space-x-3 place-self-center px-1 pt-2 '>
          <div >
            <img src={image} alt="" className='rounded-full w-[60px] h-[60px] object-cover' />
          </div>
          <div className='flex flex-col mt-2 '>
            <div className='text-white font-[600] z-10 '>{name}</div>
            <div className='text-[#00CC99] z-10'>{followers}</div>


          </div>
          <span className='z-10 mt-3 '><Follow /></span>
        </div>
      </div>
    </>
  )
}

export default Card