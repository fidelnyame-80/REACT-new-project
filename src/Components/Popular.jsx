import React from "react";

const popularProducts = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        category: "Outerwear",
        price: 89,
        image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Linen Blend Shirt",
        category: "Tops",
        price: 45,
        image:
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Urban Runner Sneakers",
        category: "Footwear",
        price: 95,
        image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Minimalist Leather Watch",
        category: "Accessories",
        price: 149,
        image:
            "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
    },
];

const Popular = ({ addToCart }) => {
    return (
        <section className="px-6 md:px-10">
            {/* HEADER */}
            <div className="flex justify-between items-center my-6">
                <h2 className="text-xl font-bold">Trending Now</h2>
                <span className="text-blue-700 cursor-pointer hover:underline">
                    View all
                </span>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularProducts.map((p) => (
                    <div
                        key={p.id}
                        className="shadow-md rounded-md overflow-hidden bg-white"
                    >
                        <div className="h-72 overflow-hidden">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="h-full w-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-3">
                            <p className="text-lg font-medium">{p.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{p.category}</p>

                            <div className="flex justify-between items-center mt-4">
                                <p className="font-bold text-lg">${p.price}</p>
                                <button
                                    onClick={() => addToCart(p)}
                                    className="bg-gray-100 px-4 py-1 rounded shadow hover:bg-blue-600 hover:text-white transition"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* PROMO SECTION */}
            <div className="bg-blue-600 text-white rounded-md text-center my-16 px-6 py-16">
                <h1 className="text-3xl md:text-5xl font-bold">
                    Join the Club & Get 20% Off
                </h1>

                <p className="my-6 text-sm md:text-base">
                    Sign up for our newsletter to receive exclusive offers,
                    <br className="hidden md:block" />
                    early access to new drops, and more.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="p-3 rounded text-black w-full sm:w-80"
                    />
                    <button className="bg-white text-blue-700 px-6 py-3 rounded font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Popular;
