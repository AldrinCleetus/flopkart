import { useParams } from "react-router-dom";
import ProductsShelf from "../components/ProductsShelf";
import { CategoryType } from "../utils/contants";

const AllItemsPage = () => {
  const { category } = useParams();
  //fix later
  const categoryParam = category as CategoryType;

  //   console.log(category);

  return (
    <div className="w-full mx-auto flex">
      <div className="w-full">
        {category === undefined ? (
          <ProductsShelf viewAll={true}></ProductsShelf>
        ) : (
          <ProductsShelf
            viewAll={true}
            showByCategory={true}
            category={categoryParam}
          ></ProductsShelf>
        )}
      </div>
    </div>
  );
};

export default AllItemsPage;
