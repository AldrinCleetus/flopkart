import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/Store";
import { getProductsFromAPI } from "../store/ProductsSlice";
import { ProductsShelfProps } from "../types/types";
import { applyMiddleware } from "@reduxjs/toolkit";

const ProductsShelf = ({
  skipProducts = 0,
  category = "",
  showByCategory = false,
  viewAll = false,
}: ProductsShelfProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { APIResponse, status } = useSelector(
    (state: RootState) => state.productsFromAPI
  );

  const handleScrollClick = (direction: "left" | "right") => {
    const container = containerRef.current;

    if (container) {
      if (direction === "left") {
        setScrollPosition(Math.max(scrollPosition - 400, 0));
      } else if (direction === "right") {
        setScrollPosition(
          Math.min(scrollPosition + 400, container.scrollWidth * 0.5)
        );
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [scrollPosition]);

  useEffect(() => {
    dispatch(
      getProductsFromAPI({
        skip: skipProducts,
        findByCategory: showByCategory,
        category: category,
      })
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mt-6 mx-2 relative ">
      <h3 className="text-2xl font-bold flex gap-2 text-text dark:text-white border-b-4 pb-2 border-primary">
        Best Selling{" "}
        <p className="text-primary">
          {showByCategory ? category + `!` : "Items!"}
        </p>
      </h3>
      <button
        onClick={() => handleScrollClick("right")}
        className="hidden md:block absolute bg-primary right-0 top-2/4 rounded-lg px-2 py-2  opacity-20 hover:opacity-100 transition-all ease-in-out"
      >
        <svg
          className="w-4 h-4 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
      <button
        onClick={() => handleScrollClick("left")}
        className="hidden md:block absolute bg-primary left-0 top-2/4 rounded-lg px-2 py-2  opacity-20 hover:opacity-100 transition-all ease-in-out"
      >
        <svg
          className="w-4 h-4 rotate-180 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className={`flex flex-wrap ${
          !viewAll ? "md:flex-nowrap md:justify-start" : "md:justify-evenly"
        } gap-4 md:px-2 md:flex-row my-8 md:gap-6 overflow-scroll no-scrollbar  py-2 justify-around mx-auto"`}
      >
        {status === "succeeded" &&
          APIResponse.products.map((product, index) => {
            if (showByCategory && product.category === category) {
              return <ProductCard key={index} product={product}></ProductCard>;
            } else if (!showByCategory) {
              return <ProductCard key={index} product={product}></ProductCard>;
            }
          })}
      </div>
    </div>
  );
};

export default ProductsShelf;
