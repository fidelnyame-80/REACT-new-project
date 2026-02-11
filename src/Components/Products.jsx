import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "../data";
import Categories from "./Categories";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
    size: "",
    color: "",
  });

  const filteredProducts = products.filter((p) => {
    // CATEGORY
    if (filters.category !== "all" && p.category !== filters.category)
      return false;

    // PRICE
    if (filters.price !== "all") {
      const price = p.price;
      if (filters.price === "0-50" && price > 50) return false;
      if (filters.price === "50-100" && (price < 50 || price > 100)) return false;
      if (filters.price === "100-200" && (price < 100 || price > 200)) return false;
      if (filters.price === "200+" && price < 200) return false;
    }

    // SIZE
    if (filters.size && !p.size.includes(filters.size)) return false;

    // COLOR
    if (filters.color && p.color !== filters.color) return false;

    return true;
  });

  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* FILTERS SIDEBAR */}
      <div className="col-span-1">
        <Categories onFilterChange={setFilters} />
      </div>

      {/* PRODUCTS GRID */}
      <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 && (
          <p className="text-gray-500">No products match your filters</p>
        )}

        {filteredProducts.map((p) => (
          <div key={p.id} className="shadow rounded-md overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-3">
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-sm">${p.price}</p>

              <NavLink
                to={`/product/${p.id}`}
                className="text-blue-600 text-sm"
              >
                View
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
