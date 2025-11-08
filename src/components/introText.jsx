import React from 'react'


const Intro = () => {
  const color = "#F54B28";
  return (
    <div className='flex flex-col space-y-5'>
       <div className='text-[2.3rem] place-self-center text-white'>Find your sound. <span className='text-[#00F5D4] italic ' >Find your People</span></div> 

       <div className='text-[1.5rem] text-[white]/80 place-self-center'>
        Find your <span className='text-blue-500'>perfect</span> match through the music that moves you.
       </div>

       <div className='bg-[blue]/90 shadow-lg place-self-center  w-25 px-2 py-2 rounded-xl text-white cursor-pointer'>
        Listen Now
       </div>
    </div>
  )
}

export default Intro