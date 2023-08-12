import { useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard"

const ProductsShelf = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScrollClick = (direction: "left" | "right") => {
    const container = containerRef.current

    if (container) {
      if (direction === "left") {
        setScrollPosition(Math.max(scrollPosition - 400, 0))
      } else if (direction === "right") {
        setScrollPosition(
          Math.min(scrollPosition + 400, container.scrollWidth * 0.5)
        )
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [scrollPosition])

  return (
    <div className="mt-6 mx-2 relative">
      <h3 className="text-2xl font-bold flex gap-2 text-text border-b-4 pb-2 border-primary">
        Best Selling <p className="text-primary">Smartphones!</p>
      </h3>
      <button
        onClick={() => handleScrollClick("right")}
        className="hidden md:block absolute bg-primary right-0 top-2/4 rounded-lg px-2 py-2  opacity-20 hover:opacity-100 transition-all ease-in-out"
      >
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
      <button
        onClick={() => handleScrollClick("left")}
        className="hidden md:block absolute bg-primary left-0 top-2/4 rounded-lg px-2 py-2  opacity-20 hover:opacity-100 transition-all ease-in-out"
      >
        <svg
          className="w-4 h-4 rotate-180 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="flex flex-wrap md:flex-nowrap gap-4 md:justify-start md:px-2 md:flex-row my-8 md:gap-6 overflow-scroll no-scrollbar  py-2 justify-around"
      >
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmade2style.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fphoto-1-2.jpg%3Fw%3D660&f=1&nofb=1&ipt=cc0b718e3732a985a24d5a6bb1bc9decaaf79873d639665a9a999477c4fef7e0&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmade2style.com%2Fwp-content%2Fuploads%2F2014%2F02%2Fphoto-1-2.jpg%3Fw%3D660&f=1&nofb=1&ipt=cc0b718e3732a985a24d5a6bb1bc9decaaf79873d639665a9a999477c4fef7e0&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myitshop.com.au%2Fwp-content%2Fuploads%2Fiphone-x-transparent.png&f=1&nofb=1&ipt=0c157564d1b3518997ebb3d664b356d310dc6ad9479b22c9d909f66599b49764&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gtlaw-consumerproductscounselor.com%2Ffiles%2F2014%2F07%2Fshutterstock_64958509.jpg&f=1&nofb=1&ipt=5249f98fb3df3f594c9766e2a9b1185a0d2a02ece51eb7744ce6a67b6c20dce7&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myitshop.com.au%2Fwp-content%2Fuploads%2Fiphone-x-transparent.png&f=1&nofb=1&ipt=0c157564d1b3518997ebb3d664b356d310dc6ad9479b22c9d909f66599b49764&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatvjqhrfpo.cloudimg.io%2Fv7%2Fhttps%3A%2F%2Fdotdashes.com%2Fwp-content%2Fuploads%2F2017%2F05%2FApple.png%3Fw%3D696&f=1&nofb=1&ipt=aed32568f2c74e379a01b0763c6c0b13594ebaaf9286b6f18b2a4191d6d3dd24&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myitshop.com.au%2Fwp-content%2Fuploads%2Fiphone-x-transparent.png&f=1&nofb=1&ipt=0c157564d1b3518997ebb3d664b356d310dc6ad9479b22c9d909f66599b49764&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myitshop.com.au%2Fwp-content%2Fuploads%2Fiphone-x-transparent.png&f=1&nofb=1&ipt=0c157564d1b3518997ebb3d664b356d310dc6ad9479b22c9d909f66599b49764&ipo=images"
          }
        ></ProductCard>
        <ProductCard
          image={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.myitshop.com.au%2Fwp-content%2Fuploads%2Fiphone-x-transparent.png&f=1&nofb=1&ipt=0c157564d1b3518997ebb3d664b356d310dc6ad9479b22c9d909f66599b49764&ipo=images"
          }
        ></ProductCard>
      </div>
    </div>
  )
}

export default ProductsShelf
