import React from 'react'
import image from '../assets/image.png'

const Image = () => {
  return (
    <div>
        <img src={image} alt="" className='w-[10rem] h-[10rem] '/>
    </div>
  )
}

export default Image