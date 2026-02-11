import React from 'react'

const Category = () => {
    return (
        <section>
            <div className='m-9'>
                {/* one */}
                <div className='flex justify-between my-5'>
                    <h2 className='text-lg font-bold'>Shop by Category</h2>
                    <a href="#" className='text-blue-700 hover:underline'>View all categories</a>
                </div>
                {/* pic */}
                <div className='lg:flex md:flex justify-between space-y-5'>
                    {/* 1 */}
                    <div className='w-70 h-60 shadow-md overflow-hidden rounded-md'>
                        <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop" alt="Men's clothing" className='w-70 h-60 object-cover rounded-md hover:scale-145 duration-800' />
                    </div>
                    {/* 2 */}
                    <div className='w-70 h-60 shadow-md overflow-hidden rounded-md'>
                        <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop" alt="Women's clothing" className='w-70 shadow-md h-60 object-cover rounded-md hover:scale-145 duration-800' />
                    </div>
                    {/* 3 */}
                    <div className='w-70 h-60 shadow-md overflow-hidden rounded-md'>
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" alt="Accessories" className='w-70 h-60 object-cover shadow-md rounded-md hover:scale-145 duration-800' />
                    </div>
                    {/* 4 */}
                    <div className='w-70 h-60 shadow-md overflow-hidden rounded-md'>
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" alt="Footware" className='w-70 shadow-md h-60 object-cover rounded-md hover:scale-145 duration-800' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category