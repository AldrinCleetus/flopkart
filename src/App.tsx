import { Provider } from "react-redux"
import Carousel from "./components/Carousel"
import Categories from "./components/Categories"
import NavBar from "./components/NavBar"
import ProductsShelf from "./components/ProductsShelf"
import Store from "./store/Store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <div className="2xl:w-[1500px] flex flex-col mx-auto justify-center">
          <ToastContainer
            position="top-center"
            autoClose={1000}
            limit={2}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
          <NavBar></NavBar>
          <Categories></Categories>
          <Carousel></Carousel>
          <ProductsShelf></ProductsShelf>
          <ProductsShelf
            category="laptops"
            showByCategory={true}
          ></ProductsShelf>
        </div>
      </Provider>
    </div>
  )
}

export default App
