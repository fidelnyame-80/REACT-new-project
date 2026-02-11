import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data"; // 
import Button from "../Components/Button";

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === Number(id));

    if (!product)
        return <p className="mt-40 text-center text-3xl font-bold">Product not found</p> 

    return (
        <section className="p-8 lg:flex space-x-20">
            <img src={product.image} alt={product.name} className="w-90 rounded mb-4" />
            <div>
                <div>
                    <h2 className="text-3xl mb-7 font-bold">{product.name}</h2>
                    <p className="mb-7">{product.description}</p>
                    <p className="text-pink-600 font-semibold mb-4">
                        ${product.price}
                    </p>
                </div>
                <Button
                    onClick={() => addToCart(product)} //
                    text="Add to cart"
                />
            </div>

            <div className="mt-4">
                <Link to="/product" className="text-pink-600">
                    Back
                </Link>
            </div>

        </section>
    );
};

export default ProductDetails;
