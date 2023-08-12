// fix type later
const ProductCard = ({ image }: { image: string }) => {
  return (
    <div className="w-36 md:w-72 max-h-72 flex flex-col md:max-h-none bg- bg-opacity-5 shadow-md outline-primary outline-2 hover:outline rounded-lg flex-shrink-0">
      <div className="my-auto">
        <a href="#">
          <img
            className="p-2  mx-auto max-h-32     md:max-h-52  rounded-xl"
            src={image}
            alt="product image"
          />
        </a>
      </div>
      <div className="px-5 pb-5 mt-auto">
        <a href="#">
          <h5 className="text-xm font-semibold tracking-tight text-gray-700 ">
            IPhone 8 Plus pro 128 GB
          </h5>
          <p className="text-sm text-text font-light">Subtext something</p>
        </a>

        <div className="flex items-center justify-between md:mt-4">
          <div className="flex flex-col md:flex-row md:gap-2">
            <span className="text-sm md:text-xl font-bold text-gray-900">
              $599
            </span>
            <span className="text-sm my-auto  text-gray-900 line-through">
              $799
            </span>
            <span className="text-sm my-auto  font-bold text-primary ">
              24% off
            </span>
          </div>
          <svg
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
          {/* <a
            href="#"
            className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></a> */}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
