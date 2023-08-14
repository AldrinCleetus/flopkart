import { ProductCategories } from "../utils/contants";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  return (
    <div className="h-16 flex px-4 gap-2 no-scrollbar overflow-scroll">
      <div className="flex gap-2 md:gap-8 justify-start md:justify-start w-full">
        {ProductCategories.map((category, index) => {
          return (
            <CategoryButton
              categoryName={category}
              key={index}
            ></CategoryButton>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
