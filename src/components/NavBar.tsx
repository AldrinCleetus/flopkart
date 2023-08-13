import { Link } from "react-router-dom"
import UserProfile from "./UserProfile"
import UserCart from "./UserCart"
import SearchBar from "./SearchBar"

const NavBar = () => {
  return (
    <div className="h-28 mt-2 md:h-20 w-full md:flex-row flex justify-between flex-col text-gray-700 2xl:w-[1500px] 2xl:mx-auto">
      <div className="flex mx-6 md:mx-2 my-auto justify-between">
        <Link to={"/"} className="flex">
          <svg
            className="w-9 h-9 mx-2 text-primary my-auto"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>
          <h3 className="my-auto text-4xl text-primary font-bold">Flopkart</h3>
        </Link>

        {/*Mobile - Sign/Signup */}
        <div className="md:hidden gap-4 mx-4 flex ">
          <UserProfile></UserProfile>
          <div className="w-0.5 bg-gray-300 h-2/4 my-auto"></div>
          <UserCart></UserCart>
        </div>
      </div>

      <SearchBar></SearchBar>

      {/*Desktop - Sign/Signup */}
      <div className="md:flex gap-4 mx-4 hidden">
        <UserProfile></UserProfile>
        <div className="w-0.5 bg-gray-300 h-2/4 my-auto"></div>
        <UserCart></UserCart>
      </div>
    </div>
  )
}

export default NavBar
