import { useSelector } from "react-redux"
import { RootState } from "../store/Store"
import { Link } from "react-router-dom"

const UserCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice)

  return (
    <div className="flex relative">
      <div className="absolute top-5 left-2 bg-primary text-sm text-white px-2  rounded-full ">
        <p>{cartItems.length > 0 && cartItems.length}</p>
      </div>
      <Link to={"/cart"} className="flex">
        <svg
          className="w-7 h-7 text-primary my-auto"
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
            d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
          />
        </svg>
        <p className="hidden md:block my-auto text-lg font-semibold">Cart</p>
      </Link>
    </div>
  )
}

export default UserCart
