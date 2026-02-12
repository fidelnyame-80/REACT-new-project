import React from 'react'

const Products = () => {
  return (
    <>
    <section className="">
      <h1
        className="font-bold text-3xl place-self-center mt-20 md:place-self-start ml-5 lg:place-self-start ml-10"
      >
        Product Overview
      </h1>

      <div
        className="flex flex-col place-self-center text-lg px-5 space-x-4 md:place-self-start mt-5 lg:place-self-start mt-5"
      >
        <div
          className="place-self-center text-lg px-5 space-x-4 md:place-self-start mt-5 lg:place-self-start mt-5"
        >
          <a
            href="#"
            className="underline decoration-solid focus:underline decoration-solid"
            >All Products</a
          >
          <a href="#" className="focus:underline decoration-solid">Women</a>
          <a href="#" className="focus:underline decoration-solid">Men</a>
          <a href="#" className="focus:underline decoration-solid">Bag</a>
          <a href="#" className="focus:underline decoration-solid">Shoes</a>
          <a href="#" className="focus:underline decoration-solid">Watches</a>
        </div>

        <div className="m-4 flex gap-3">
          <div
            className="w-24 text-right p-3 h-13 text-lg border border-gray-500 flex space-x-4"
          >
            <i className="fa-solid fa-filter"></i>Filter
          </div>

          <div
            className="w-24 text-right p-3 h-13 text-lg border border-gray-500 flex space-x-4"
          >
            <i className="fa-solid fa-magnifying-glass"></i>Search
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Shopping Cards --> */}
    <section
      className="flex flex-col mt-3 place-self-center space-y-8 md:grid grid-cols-2 gap-5 space-x-3 place-self-center lg:grid grid-cols-4 gap-5 space-x-4 place-self-center mx-3"
    >
      <div className="">
        <img
          src="https://i.pinimg.com/1200x/19/e6/92/19e6923a2a1573055e961cd412af48a4.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400"> African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/f1/57/ac/f157ac023c9fda7e43f163cbb9dea680.jpg"
          className="w-80 h-120"
        />
        <span className="text-gray-400"> African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/e4/e4/a1/e4e4a150ae49e5e0d318c1b71142e257.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400"> African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/26/a2/fd/26a2fda448d1f590390d44b7d7e725ff.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400"> African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/76/93/b1/7693b10fbbe8fde32e941d791568c594.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400"> African Wear 3</span><br />
        <span className="text-gray-700">$3-.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/77/1c/98/771c98c1374ff4f32cd74c79453a5837.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Women African Wear 3</span><br />
        <span className="text-gray-700">$20.04</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/92/e4/b4/92e4b410bafebbe6edb86b616db6c420.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 4</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/4a/32/03/4a3203d1d5c2ac0a6b936b6cea7d4cc1.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Women African Wear 4</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/db/17/cc/db17cc4af744d374fdcf1491e495760c.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/03/eb/a4/03eba4063f2a050343a47c903a2c1ad3.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/30/e3/ad/30e3ad07511ecc3700eabb5ada982269.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/08/b7/e6/08b7e61fa2c48c5b7a75d381db4e8587.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/11/fd/97/11fd97684f4a6d5d6ea64ab39051da62.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/25/af/42/25af4278f898db2c72d100c1468d1550.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/79/35/62/7935625cc07d7f7c3a333b49a2499bff.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>

      <div className="">
        <img
          src="https://i.pinimg.com/1200x/6a/fd/0d/6afd0da6ca594b31d76ddde74e1ba5e0.jpg"
          className="w-80 h-120 md:w-80 h-10"
        />
        <span className="text-gray-400">Men African Wear 1</span><br />
        <span className="text-gray-700">$16.64</span>
      </div>
    </section>
    </>
  )
}

export default Products