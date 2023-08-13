import { useDispatch, useSelector } from "react-redux"
import { CartProductProps } from "../types/types"
import { AppDispatch, RootState } from "../store/Store"
import {
  incrementQuanity,
  decrementQuanity,
  removeProductFromCart,
} from "../store/CartSlice"
import { openModal } from "../store/modalSlice"
import Modal from "./Modal"

const CartProduct = ({ product, productAmount }: CartProductProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { showModal } = useSelector((state: RootState) => state.modalSlice)

  const removeProduct = () => {
    dispatch(removeProductFromCart(product))
  }

  return (
    <div className="flex flex-row max-h-32 md:max-h-56 gap-2 rounded-lg p-1   shadow-md">
      <img
        className="w-16 h-16 md:w-48 md:h-auto rounded  my-auto object-cover flex-shrink-0"
        src={product.thumbnail}
        alt=""
      />
      <div className="w-24 overflow-clip md:w-auto lg:w-[300px]  flex-shrink-0 my-auto">
        <h3 className="font-bold text-md whitespace md:text-xl">
          {product.title}
        </h3>
        <p className="text-text whitespace-nowrap">{product.brand}</p>
      </div>
      <div className="flex flex-row my-auto ml-auto md:mx-0 w-full  gap-2 md:gap-12">
        <div className="custom-number-input h-10 md:h-auto mx-auto">
          <div className="flex flex-row h-10 w-16  rounded-lg relative bg-transparent mt-1">
            <button
              onClick={() => dispatch(decrementQuanity(product))}
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <svg
                className="w-3 h-3 m-auto text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              readOnly
              className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              value={productAmount}
            ></input>
            <button
              onClick={() => dispatch(incrementQuanity(product))}
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <svg
                className="w-3 h-3 m-auto text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex my-auto gap-2 md:gap-9 md:mr-4">
          <h3 className="font-bold">{"$" + product.price}</h3>
          <svg
            onClick={() => {
              dispatch(openModal(true))
            }}
            className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
            />
          </svg>
        </div>
      </div>
      <Modal
        confirmationFunction={() => removeProduct()}
        showModal={showModal}
      ></Modal>
    </div>
  )
}

export default CartProduct
