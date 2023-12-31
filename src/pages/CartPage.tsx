import { useSelector } from "react-redux"
import CartProduct from "../components/CartProduct"
import PaymentCheckOut from "../components/PaymentCheckOut"
import { RootState } from "../store/Store"

const CartPage = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice)

  return (
    <div className="mx-2 flex flex-col lg:flex-row  gap-2">
      <div className="w-full">
        <div className="p-2">
          <h3 className="font-bold text-4xl mb-2">Shopping Cart</h3>
          <p className="text-text">{`You have ${cartItems.length} items in your cart`}</p>
        </div>

        {cartItems.length <= 0 && (
          <div className="mx-auto">
            <img
              className="w-auto"
              src="https://www.reshot.com/preview-assets/illustrations/KBG392DTQW/empty-website-page-KBG392DTQW-w1600.jpg"
              alt=""
            />
          </div>
        )}

        <div>
          {cartItems.map((item, index) => {
            return (
              <CartProduct
                key={index}
                product={item.product}
                productAmount={item.quantity}
                showOptions={true}
              ></CartProduct>
            )
          })}
        </div>
      </div>
      <div className="lg:w-2/5">
        {/* credit card Details */}
        {cartItems.length > 0 && <PaymentCheckOut></PaymentCheckOut>}
      </div>
    </div>
  )
}

export default CartPage
