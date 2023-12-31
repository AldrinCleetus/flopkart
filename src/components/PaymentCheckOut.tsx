import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { useEffect, useState } from "react";
import { PaymentOptions, PaymentType } from "../utils/contants";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

const PaymentCheckOut = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);
  const [totalAmount, settotalAmount] = useState(0);
  const [selectedPaymentOption, setselectedPaymentOption] =
    useState<PaymentType>("");

  const { isAuthenticated } = useAuth0();
  const shippingAmount = 42;

  const handleCheckOut = () => {
    if (!isAuthenticated) {
      toast.info(`Sign in to Checkout`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(`Payment feature work in Progress`, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    //calculate total
    settotalAmount(0);

    cartItems.map((item) => {
      settotalAmount((prev) => {
        return prev + item.product.price * item.quantity;
      });
    });
  }, [cartItems]);

  return (
    <div className="p-5 rounded-lg bg-primary text-white">
      <h3 className="font-bold text-2xl ">Card Details</h3>
      <p>Card type</p>
      <div className="flex my-2 ">
        {PaymentOptions.map((option, index) => {
          return (
            <div
              onClick={() => setselectedPaymentOption(option.paymentType)}
              key={index}
              className={`w-20 bg-white bg-opacity-20 flex p-4 cursor-pointer mx-2 border-white hover:scale-105 transition-all ease-in-out  border-2 rounded-lg  ${
                selectedPaymentOption === option.paymentType
                  ? "border-opacity-100"
                  : "border-opacity-10"
              }`}
            >
              <img
                className="my-auto"
                src={option.logo}
                alt={option.paymentType}
              />
            </div>
          );
        })}
      </div>
      <form className="flex flex-wrap gap-3 w-full ">
        <label className="relative w-full flex flex-col">
          <span className="font-bold mb-3">Card number</span>
          <input
            className="bg-white bg-opacity-10 rounded-md peer pl-12 pr-2 py-2 focus:outline-none border-2 placeholder-gray-300"
            type="text"
            name="card_number"
            placeholder="0000 0000 0000"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
        </label>

        <label className="relative flex-1 flex flex-col">
          <span className="font-bold mb-3">Expire date</span>
          <input
            className="bg-white bg-opacity-10 rounded-md peer pl-12 pr-2 py-2 focus:outline-none border-2 placeholder-gray-300"
            type="text"
            name="expire_date"
            placeholder="MM/YY"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </label>

        <label className="relative flex-1 flex flex-col">
          <span className="font-bold flex items-center gap-3 mb-3">
            CVC/CVV
            <span className="relative group">
              <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                {" "}
                Number given back of your card
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </span>
          <input
            className="bg-white bg-opacity-10 rounded-md peer pl-12 pr-2 py-2 focus:outline-none border-2 border-gray-200 placeholder-gray-300"
            type="text"
            name="card_cvc"
            placeholder="&bull;&bull;&bull;"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2  text-gray-300 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </label>
      </form>
      <br />
      <hr />
      <div className="flex flex-col mt-2 gap-2">
        <div className="flex justify-between font-semibold">
          <p>Subtotal</p>
          <p>{"$" + totalAmount}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Shipping</p>
          <p>{"$" + shippingAmount}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Total (Tax incl.)</p>
          <p>{"$" + (totalAmount + shippingAmount)}</p>
        </div>
        <button
          onClick={handleCheckOut}
          className="flex justify-between p-5 rounded-lg bg-green-400 text-white font-bold"
        >
          <p>{"$" + (totalAmount + shippingAmount)}</p>{" "}
          <div className="flex gap-2">
            <p>Checkout</p>
            <svg
              className="w-6 h-6text-white"
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
  );
};

export default PaymentCheckOut;
