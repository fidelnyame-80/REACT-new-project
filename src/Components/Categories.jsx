import React, { useState } from "react";

const Categories = ({ onFilterChange }) => {
    const [category, setCategory] = useState("all");
    const [price, setPrice] = useState("all");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");

    const updateFilter = (key, value) => {
        // update local state
        if (key === "category") setCategory(value);
        if (key === "price") setPrice(value);
        if (key === "size") setSize(value);
        if (key === "color") setColor(value);

        // send updated filters to parent
        onFilterChange({
            category: key === "category" ? value : category,
            price: key === "price" ? value : price,
            size: key === "size" ? value : size,
            color: key === "color" ? value : color,
        });
    };

    return (
        <section className="p-4  rounded shadow sticky top-4">
            {/* CATEGORY */}
            <div className="mb-5">
                <h2 className="font-bold mb-2">Categories</h2>
                {["all", "men", "women", "accessories", "footwear"].map((c) => (
                    <div key={c} className="mb-1">
                        <input
                            type="radio"
                            name="category"
                            value={c}
                            checked={category === c}
                            onChange={() => updateFilter("category", c)}
                            className="mr-2"
                        />
                        <label className="capitalize">
                            {c === "all" ? "All Products" : c}
                        </label>
                    </div>
                ))}
            </div>

            {/* PRICE */}
            <div className="mb-5">
                <h3 className="font-bold mb-2">Price Range</h3>
                {["0-50", "50-100", "100-200", "200+"].map((p) => (
                    <div key={p} className="mb-1">
                        <input
                            type="radio"
                            name="price"
                            checked={price === p}
                            onChange={() => updateFilter("price", p)}
                            className="mr-2"
                        />
                        <label>${p}</label>
                    </div>
                ))}
            </div>

            {/* SIZE */}
            <div className="mb-5">
                <h3 className="font-bold mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                        <button
                            key={s}
                            onClick={() => updateFilter("size", s)}
                            className={`border px-3 py-1 rounded ${size === s ? "bg-blue-600 text-white" : ""
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* COLOR */}
            <div>
                <h3 className="font-bold mb-2">Color</h3>
                <div className="flex gap-2 flex-wrap">
                    {["black", "blue", "green", "red", "orange"].map((c) => (
                        <button
                            key={c}
                            onClick={() => updateFilter("color", c)}
                            className={`w-7 h-7 rounded-full border ${color === c ? "ring-2 ring-black" : ""
                                } bg-${c}-600`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
