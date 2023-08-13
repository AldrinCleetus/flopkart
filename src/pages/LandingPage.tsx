import Carousel from "../components/Carousel"
import Categories from "../components/Categories"
import ProductsShelf from "../components/ProductsShelf"

const LandingPage = () => {
  return (
    <>
      <Categories></Categories>
      <Carousel></Carousel>
      {/* <ProductsShelf></ProductsShelf> */}
      <ProductsShelf
        category="smartphones"
        showByCategory={true}
      ></ProductsShelf>
      <ProductsShelf category="skincare" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="laptops" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
      <ProductsShelf
        category="home-decoration"
        showByCategory={true}
      ></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
      <ProductsShelf category="groceries" showByCategory={true}></ProductsShelf>
    </>
  )
}

export default LandingPage
