import { useEffect } from "react"
import CartIcon from "../assets/icons/cart.svg"
import { useDispatch, useSelector } from "react-redux"
// import { changeText } from "../store/ProductsSlice";
import { RootState, AppDispatch } from "../store/Store"
import { getProductsFromAPI } from "../store/ProductsSlice"

const NavBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { APIResponse, status } = useSelector(
    (state: RootState) => state.productsFromAPI
  )

  useEffect(() => {
    dispatch(getProductsFromAPI())
    console.log(APIResponse)
  }, [])

  return (
    <div className="h-28 mt-2 md:h-20 w-full md:flex-row flex justify-between flex-col text-gray-700 2xl:w-[1500px] 2xl:mx-auto">
      <div className="flex mx-6 md:mx-2 my-auto justify-between">
        <div className="flex">
          {/* <img
            className="w-12 bg-primary bg-opacity-10 p-1 rounded-lg"
            src={LogoIcon}
            alt="TeeHee"
          /> */}
          <svg
            className="w-9 h-9 mx-2 text-primary my-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
          <h3 className="my-auto text-4xl text-primary font-bold">
            {status === "succeeded" && APIResponse.products[0].brand}
          </h3>
        </div>

        {/* Sign/Signup */}
        <div className="md:hidden gap-4 mx-4 flex ">
          <div className="flex gap-1">
            {/* <img className="w-8" src={UserIcon} alt="U" /> */}
            <svg
              className="w-7 h-7 my-auto text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
              />
            </svg>
            <p className="my-auto text-lg font-semibold hidden">something</p>
          </div>
          <div className="w-0.5 bg-gray-300 h-2/4 my-auto"></div>

          <div className="flex">
            <img className="w-8" src={CartIcon} alt="U" />
            <p className="my-auto text-lg font-semibold hidden">Cart</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="my-auto md:w-2/5 flex bg-primary bg-opacity-10 mx-6 px-2 py-2 rounded-lg font-semibold">
        {/* <img className="w-8 " src={SearchIcon} alt="" /> */}
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
          className="px-2 w-full focus:outline-none bg-white bg-opacity-0 "
          type="text"
          placeholder="Find anything you are looking for!"
          name=""
          id=""
        />
      </div>

      {/* Sign/Signup */}
      <div className="md:flex gap-4 mx-4 hidden">
        <div className="flex gap-1">
          <svg
            className="w-7 h-7 my-auto text-primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
            />
          </svg>
          <p className="my-auto text-lg font-semibold">SignIn/SignUp</p>
        </div>
        <div className="w-0.5 bg-gray-300 h-2/4 my-auto"></div>

        <div className="flex">
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
          <p
            className="my-auto text-lg font-semibold"
            onClick={() => {
              dispatch(getProductsFromAPI())
            }}
          >
            Cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
