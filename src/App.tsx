import NavBar from "./components/NavBar"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LandingPage from "./pages/LandingPage"

import { Routes, Route } from "react-router-dom"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <main className="">
      <div className=" dark:bg-stone-800 ">
        <div className="2xl:w-[1500px] flex flex-col mx-auto">
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
          <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route
              path="/product/:productID"
              element={<ProductPage></ProductPage>}
            ></Route>
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
