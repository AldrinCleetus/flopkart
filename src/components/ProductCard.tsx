import { useDispatch, useSelector } from "react-redux"
import { ProductCartProps } from "../types/types"
import { AppDispatch, RootState } from "../store/Store"
import { addProductToCart, removeProductFromCart } from "../store/CartSlice"
import { toast } from "react-toastify"

const ProductCard = ({ product }: ProductCartProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { cartItems } = useSelector((state: RootState) => state.cartSlice)

  const isInCart = cartItems.find((prod) => prod.product.id === product.id)

  const handleCart = (action: "add" | "remove") => {
    if (action === "add") {
      dispatch(addProductToCart(product))
      toast.success(`Added ${product.title} to cart`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else if (action === "remove") {
      dispatch(removeProductFromCart(product))
      toast.error(`Removed ${product.title} from cart`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  return (
    <div className="w-36 md:w-72 max-h-72 flex flex-col md:max-h-none bg- bg-opacity-5 shadow-md outline-primary outline-2 hover:outline rounded-lg flex-shrink-0">
      <div className="my-auto">
        <img
          className="p-2  mx-auto max-h-32     md:max-h-52  rounded-xl"
          src={product.thumbnail}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5 mt-auto">
        <a href="#">
          <h5 className="text-xm font-semibold tracking-tight text-gray-700 ">
            {product.title}
          </h5>
          <p className="text-sm text-text font-light">{product.brand}</p>
        </a>

        <div className="flex items-center justify-between md:mt-4">
          <div className="flex flex-col md:flex-row md:gap-2">
            <span className="text-sm md:text-xl font-bold text-gray-900">
              {`$` + product.price}
            </span>
            <span className="text-sm my-auto  text-gray-900 line-through">
              {`$` + (Number(product.price) + 200)}
            </span>
            <span className="text-sm my-auto  font-bold text-primary ">
              {product.discountPercentage + `% off`}
            </span>
          </div>
          {isInCart ? (
            <svg
              onClick={() => handleCart("remove")}
              className="w-6 h-6 text-primary cursor-pointer transition-all hover:scale-125 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 21"
            >
              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
            </svg>
          ) : (
            <svg
              onClick={() => handleCart("add")}
              className="w-6 h-6 text-primary cursor-pointer transition-all hover:scale-125 "
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
                d="M8 5h4m-2 2V3M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.938-11H17l-2 7H5m0 0L3 4m0 0h2M3 4l-.792-3H1"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
