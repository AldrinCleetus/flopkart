type CategoryButtonProps = {
  categoryName: string;
};

const CategoryButton = ({ categoryName }: CategoryButtonProps) => {
  return (
    <div className="bg-primary my-auto rounded-full text-white text-center cursor-pointer transition-all hover:scale-105">
      <p className="mx-4 my-2">{categoryName}</p>
    </div>
  );
};

export default CategoryButton;
