const SearchBar = () => {
  return (
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
  )
}

export default SearchBar
