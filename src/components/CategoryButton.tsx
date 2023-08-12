import { CategoryType } from "../utils/contants"

type CategoryButtonProps = {
  categoryName: CategoryType
}

const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
  return (
    <div className="bg-primary my-auto rounded-full text-white text-center cursor-pointer transition-all hover:scale-105">
      <p className="mx-4 my-2 text-sm whitespace-nowrap">{categoryName}</p>
    </div>
  )
}

export default CategoryButton
