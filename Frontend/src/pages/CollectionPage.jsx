import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: "1",
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },

        {
          _id: "2",
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },

        {
          _id: "3",
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },

        {
          _id: "4",
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
      ];

      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.conatins(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    //add event listner for click
    document.addEventListener("mousedown", handleClickOutside);
    //clean eventlistner on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/**Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center p-2 border lg:hidden"
      >
        <FaFilter className="mr-2" />
        Filter
      </button>

      {/**filter sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 bg-white fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:static lg:translate-x-0 overflow-y-auto`} //add overflow-y-auto later after sidebar content
      >
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="mb-4 text-2xl uppercase">All Collections</h2>
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default CollectionPage;
