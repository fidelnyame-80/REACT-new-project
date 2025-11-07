import React from 'react'
import Card from './components/cardUI'
import { Images } from './assets/artist images'
import Intro from './components/introText'

const App = () => {
  return (
    <>
      <div className=''>
        <div className='mt-10'>
          <Intro />
        </div>
        <div className='flex space-x-10 place-self-center mt-10'>
          <span className='rotate-[-3deg] mt-3'><Card name={"Hulvey"} title={"Altar"} followers={"20K followers"} image={Images.Hulvey}/></span>
          
          <Card name={"Lecrae"} title={"Church clothes"} followers={"300k followers"} image={Images.Lecrae} />
          <span className='rotate-[3deg] mt-5'><Card name={"Jackie-Hill Perry"} title={"The Art of Joy"} followers={"50k followers"} image={Images.Jackie}/></span>
          
        </div>

      </div>

    </>
  )
}

export default App