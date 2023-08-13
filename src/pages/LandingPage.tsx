import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import ProductsShelf from "../components/ProductsShelf"

const LandingPage = () => {
  return (
    <>
      <Categories></Categories>
      <Carousel></Carousel>
      <ProductsShelf></ProductsShelf>
      <ProductsShelf category="laptops" showByCategory={true}></ProductsShelf>
    </>
  )
}

export default LandingPage
