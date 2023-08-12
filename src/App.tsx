import { Provider } from "react-redux"
import Carousel from "./components/Carousel"
import Categories from "./components/Categories"
import NavBar from "./components/NavBar"
import ProductsShelf from "./components/ProductsShelf"
import Store from "./store/Store"

function App() {
  return (
    <Provider store={Store}>
      <div className="2xl:w-[1500px] flex flex-col mx-auto justify-center">
        <NavBar></NavBar>
        <Categories></Categories>
        <Carousel></Carousel>
        <ProductsShelf></ProductsShelf>
        <ProductsShelf></ProductsShelf>
      </div>
    </Provider>
  )
}

export default App
