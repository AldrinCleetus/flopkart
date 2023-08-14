import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const { products } = useSelector(
    (state: RootState) => state.productsFromAPI.APIResponse
  );

  //   const { cartItems } = useSelector((state: RootState) => state.cartSlice)

  const [searchResults, setsearchResults] = useState<Array<Product>>();
  const [searchQuery, setsearchQuery] = useState("");

  const fuse = new Fuse(products, {
    keys: ["title", "description", "category"],
  });

  useEffect(() => {
    const matchingProducts = fuse.search(searchQuery).map((el) => el.item);
    setsearchResults(matchingProducts);
  }, [products, searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-auto relative md:w-2/5 flex bg-black bg-opacity-10 mx-6 px-2 py-2 rounded-lg font-semibold">
      <svg
        className="w-8 h-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 3c-7.412 0-9 1.588-9 9s1.588 9 9 9 9-1.588 9-9-1.588-9-9-9zm-.5 4.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
            clipRule="evenodd"
            opacity="0.1"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M3 12c0-7.412 1.588-9 9-9s9 1.588 9 9-1.588 9-9 9-9-1.588-9-9z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 14l2 2"
          ></path>
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
          ></path>
        </g>
      </svg>
      <input
        value={searchQuery}
        onChange={(e) => setsearchQuery(e.target.value)}
        className="px-2 w-full focus:outline-none bg-white bg-opacity-0 "
        type="text"
        placeholder="Find anything you are looking for!"
        name=""
        id=""
      />
      <div
        className={`${
          searchQuery === "" ? "hidden" : ""
        } absolute  w-full flex flex-col gap-2 rounded-lg py-2 left-0 transition-all ease-in-out bg-white z-10 top-12`}
      >
        {searchResults &&
          searchResults.splice(0, 5).map((product, index) => {
            return (
              <div
                onClick={() => setsearchQuery("")}
                key={index}
                className="w-full"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="flex gap-2 px-2 hover:bg-slate-200 cursor-pointer">
                    <img
                      className="w-24 max-h-24 object-cover rounded-lg"
                      src={product.thumbnail}
                      alt=""
                    />
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.brand}</p>
                      <p>{"$" + product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
