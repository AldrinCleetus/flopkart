import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/Store"
import { getProductsByID } from "../store/ProductsSlice"
import Loading from "../components/Loading"
import ProductRating from "../components/ProductRating"

const ProductPage = () => {
  const { productID } = useParams()
  const [selectedImage, setselectedImage] = useState(0)

  const dispatch = useDispatch<AppDispatch>()
  const { APIResponse, status } = useSelector(
    (state: RootState) => state.productsFromAPI
  )

  const product = APIResponse.products.filter(
    (prod) => prod.id === Number(productID)
  )

  useEffect(() => {
    console.log("hhu")
    dispatch(getProductsByID(Number(productID)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (product.length === 0) {
    return <Loading></Loading>
  }

  if (status === "pending") {
    return <Loading></Loading>
  }

  const originalPrice = Math.floor(
    product[0].price / (1 - product[0].discountPercentage / 100)
  )

  return (
    <div className=" flex flex-col lg:flex-row gap-2">
      <div className="p-2 mx-auto md:mx-0   lg:min-w-[400px] flex flex-col ">
        <div className="flex flex-col mx-auto ">
          <img
            className="rounded-md object-contain max-h-[400px]"
            src={product[0].images[selectedImage]}
            alt=""
          />
          <div className="flex justify-start mt-2 sm:justify-center overflow-x-scroll no-scrollbar mx-auto h-28  md:h-22 lg:h-20 md:justify-center  gap-1 md:gap-4 lg:gap-4">
            {product[0].images.map((image, index) => {
              return (
                <img
                  onClick={() => setselectedImage(index)}
                  key={index}
                  className="rounded-md hover:scale-105 object-contain p-2 transition-all ease-in-out cursor-pointer"
                  src={image}
                  alt=""
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="w-full flex flex-col gap-3 rounded-lg mx-2 p-2">
        <div>
          <h2 className="text-2xl font-bold">{product[0].title}</h2>
          <h4 className="text-text font-light">{product[0].brand}</h4>
        </div>
        <ProductRating rating={product[0].rating}></ProductRating>

        <div className="flex gap-2">
          <h2 className="text-2xl font-bold">{`$${product[0].price}`}</h2>
          <span className="text-sm my-auto  text-gray-900 line-through">
            {`$${originalPrice}`}
          </span>
          <span className="text-sm my-auto  font-bold text-primary ">
            {`${product[0].discountPercentage}% off`}
          </span>
        </div>
        <p className="text-text">{product[0].description}</p>
        <button className="flex  justify-between mr-auto p-2 rounded-lg bg-primary text-white font-bold">
          <div className="flex gap-2">
            <p>Add to Cart</p>
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ProductPage
