import CategoryButton from "./CategoryButton"

const Categories = () => {
  return (
    <div className="h-16 bg-re-200 flex px-4 gap-2 scrollbar-hide">
      <div className="flex gap-2 md:gap-8 justify-start md:justify-center w-full">
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
        <CategoryButton categoryName="Category"></CategoryButton>
      </div>
    </div>
  )
}

export default Categories
