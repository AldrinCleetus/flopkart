import { Link } from "react-router-dom";
import { CategoryType } from "../utils/contants";

type CategoryButtonProps = {
  categoryName: CategoryType;
};

const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
  return (
    <div className="bg-primary my-auto rounded-full text-white text-center cursor-pointer transition-all hover:scale-105">
      <Link to={`/all/${categoryName}`}>
        <p className="mx-4 my-2 text-sm lg:text-lg whitespace-nowrap">
          {categoryName}
        </p>
      </Link>
    </div>
  );
};

export default CategoryButton;
