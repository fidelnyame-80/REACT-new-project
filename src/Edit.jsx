import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";

const Edit = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert("Added to cart");
    };

    const removeItem = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <BrowserRouter>
            <Navbar cartCount={cart.length} />

            <Routes>
                <Route path="/" element={<Home addToCart={addToCart}/>} />
                <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} />} />
                <Route path="/product" element={<Product />} />
                <Route
                    path="/product/:id"
                    element={<ProductDetails addToCart={addToCart} />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Edit;
