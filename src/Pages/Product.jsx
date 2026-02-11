import React from 'react'
import Products from '../Components/Products'
import Footer from '../Components/Footer'

const Product = () => {
  return (
    <section>
      <div className='flex justify-center mt-9 space-x-10'>
        {/* one */}
        <div className='mb-15'>
          <Products/>
        </div>
      </div>

      <Footer/>
    </section>
  )
}

export default Product