import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { RootState } from "../store/Store";
import { useAuth0 } from "@auth0/auth0-react";

const WishListPage = () => {
  const { wishListItems } = useSelector((state: RootState) => state.cartSlice);

  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="mx-auto">
        <img
          className="w-auto"
          src="https://www.reshot.com/preview-assets/illustrations/KBG392DTQW/empty-website-page-KBG392DTQW-w1600.jpg"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="mx-2 flex flex-col lg:flex-row  gap-2">
      <div className="w-full">
        <div className="p-2">
          <h3 className="font-bold text-4xl mb-2">WishList</h3>
          <p className="text-text">{`You have ${wishListItems.length} items in your wishlist    `}</p>
        </div>

        {wishListItems.length <= 0 && (
          <div className="mx-auto">
            <img
              className="w-auto"
              src="https://www.reshot.com/preview-assets/illustrations/KBG392DTQW/empty-website-page-KBG392DTQW-w1600.jpg"
              alt=""
            />
          </div>
        )}

        <div>
          {wishListItems.map((product, index) => {
            return (
              <CartProduct
                key={index}
                product={product}
                productAmount={0}
                showOptions={false}
              ></CartProduct>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
