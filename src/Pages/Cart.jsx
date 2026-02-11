import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, removeItem }) => {
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && (
        <p className="text-gray-500 text-center mt-30 text-2xl">Your cart is empty</p>
      )}

      {cart.map((item, index) => (
        <div key={index} className="lg:flex space-x-10 bg-white p-3 mb-3 rounded shadow">

          <img src={item.image} alt="" className="w-50 h-50 object-cover rounded" />
          <div>
            <p className="font-medium text-xl mb-4">{item.name}</p>
            <p className="font-bold">${item.price}</p>
          </div>

          <button onClick={() => removeItem(index)} className="text-red-500 lg:w-220 text-4xl font-bold text-right ">X</button>
        </div>
      ))}

       {cart.length > 0 && (
        <Link to="/product" className="mt-4 bg-pink-600 text-white px-6 py-2 rounded">Continue Shopping</Link>
      )}
      
      {cart.length === 0 && (
        <Link to="/product" className="mt-4 bg-pink-600 text-white px-6 py-2 rounded">Go to Shopping</Link>
      )}
    </section>
  );
};

export default Cart;
