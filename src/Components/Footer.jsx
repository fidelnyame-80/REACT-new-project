import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="mt-5 bg-[#464545] w-full h-230 p-10 space-y-8 md:h-100 grid md:grid-cols-4">
        <div className="text-2xl text-gray-400 text-center place-self-center">
          <p className="text-4xl text-gray-100 font-bold">Categories</p>
          <p className="pt-5">Women</p>
          <p>Men</p>
          <p>Shoes</p>
          <p>Watches</p>
        </div>

        <div className="text-2xl text-gray-400 text-center place-self-center">
          <p className="text-4xl text-gray-100 font-bold">Help</p>
          <p className="pt-5">Track Order</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>FAQs</p>
        </div>

        <div className="text-xl text-gray-400 text-center place-self-center">
          <p className="text-2xl text-gray-100 font-bold">GET IN TOUCH</p>
          <p className="pt-5">Any questions? Let us know in store at 8th</p>
          <p>floor, 379 Hudson St, New York, NY 10018 or</p>
          <p>call us on (+1) 96 716 6879</p>

          <div className="space-x-3">
            <i className="fab fa-facebook-f fa-lg"></i>
            <i className="fab fa-twitter fa-lg"></i>
            <i className="fab fa-instagram fa-lg"></i>
          </div>
        </div>

        <div className="text-2xl text-gray-400 text-center place-self-center">
          <p className="text-2xl text-gray-100 font-bold">NEWSLETTER</p>
          <input
            type="email"
            placeholder="email@example.com"
            className="border-b-2 border-gray-500 w-50"
          />
          <button className="w-35 h-10 m-3 text-gray-100 rounded-3xl bg-blue-700">
            SUSCRIBE
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer