import { useState } from "react";
import { ProductFillerProps } from "../types/types";
import { optionsForCategories } from "../utils/contants";

const ProductFiller = ({ category }: ProductFillerProps) => {
  const fillerData = optionsForCategories.find((e) => e.category === category);

  const [selectedOptions, setSelectedOption] = useState("");

  return (
    <div>
      <div>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {fillerData &&
            fillerData.options.map((e, i) => {
              return (
                <li key={i} className="mr-2">
                  <a
                    onClick={() => setSelectedOption(e)}
                    href="#"
                    className={`inline-block px-4 py-3  rounded-lg ${
                      selectedOptions === e
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-black"
                    }  hover:bg-primary `}
                  >
                    {e}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="flex gap-2 flex-col mt-2">
        <h3>Available Offers</h3>
        <p className="text-sm">
          <span className="text-primary">Bank Offer5% </span>Cashback on
          Flipkart Axis Bank CardT&C
        </p>
        <p className="text-sm">
          <span className="text-primary">Special Offer 5% </span> Get extra
          ₹2000 off (price inclusive of cashback/coupon)T&C
        </p>
        <p className="text-sm">
          <span className="text-primary">Freebie 5% </span> Spotify Premium - 3M
          at ₹119T&C
        </p>
        <p className="text-sm">
          <span className="text-primary">Extra 5% </span> ₹500 Off on Bikes &
          Scooters on purchase of ₹30,000 or moreT&C
        </p>
      </div>
    </div>
  );
};

export default ProductFiller;
